import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import { Button, Flex, Icon, Text } from '@highoutput/hds';
import * as React from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@highoutput/hds-icons';
import { MenuProps } from './Menu';
import { MenuContext } from './MenuContext';
import useGetDevice from '../../hooks/useGetDevice';

export const MenuComponent = React.forwardRef<
  HTMLButtonElement,
  MenuProps & React.HTMLProps<HTMLButtonElement>
>(
  (
    { children, subLabel, inView, id, hasRightIcon, icon, label, ...props },
    forwardedRef
  ) => {
    const { device } = useGetDevice();
    const isTablet = device === 'Tablet';
    const [isOpen, setIsOpen] = React.useState(false);
    const [hasFocusInside, setHasFocusInside] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
    const labelsRef = React.useRef<Array<string | null>>([]);
    const parent = React.useContext(MenuContext);

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();

    const isNested = parentId != null;

    const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? 'right-start' : 'bottom-start',
      transform: true,
      middleware: [
        offset({
          mainAxis: isNested ? 16 : 4,
          alignmentAxis: isNested ? -4 : 0,
        }),
        flip(),
        shift(),
      ],
      whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
      enabled: true,
      handleClose: safePolygon({ blockPointerEvents: true }),
    });
    const click = useClick(context, {
      event: 'mousedown',
      toggle: !isNested,
      ignoreMouse: isNested,
    });
    const role = useRole(context, { role: 'menu' });
    const dismiss = useDismiss(context, { bubbles: true });
    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    });
    const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      onMatch: isOpen ? setActiveIndex : undefined,
      activeIndex,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    React.useEffect(() => {
      if (!tree) return;

      function handleTreeClick() {
        setIsOpen(false);
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          setIsOpen(false);
        }
      }

      tree.events.on('click', handleTreeClick);
      tree.events.on('menuopen', onSubMenuOpen);

      return () => {
        tree.events.off('click', handleTreeClick);
        tree.events.off('menuopen', onSubMenuOpen);
      };
    }, [tree, nodeId, parentId]);

    React.useEffect(() => {
      if (isOpen && tree) {
        tree.events.emit('menuopen', { parentId, nodeId });
      }
    }, [tree, isOpen, nodeId, parentId]);

    return (
      <FloatingNode id={nodeId}>
        <Button
          name={id}
          id={id}
          transition="opacity 300ms ease-in-out"
          whiteSpace="nowrap"
          variant="menu"
          opacity={isTablet ? (inView ? 1 : 0.5) : 1}
          ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
          tabIndex={
            !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
          }
          _hover={{
            color: isNested ? 'Neutrals.900' : 'brand.primary.500',
            background: 'brand.primary.50',
            border: 'none',
            outline: 'none',
          }}
          role={isNested ? 'menuitem' : undefined}
          data-open={isOpen ? '' : undefined}
          data-nested={isNested ? '' : undefined}
          data-id={id}
          data-focus-inside={hasFocusInside ? '' : undefined}
          {...getReferenceProps(
            parent.getItemProps({
              ...props,
              onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                props.onFocus?.(event);
                setHasFocusInside(false);
                parent.setHasFocusInside(true);
              },
            })
          )}
        >
          <Flex align="start" justify="space-between" gap="18px" w="full">
            {icon && <Icon as={icon} fontSize="xl" />}
            <Flex gap={'8px'} align="center" w="full">
              <Flex flexDir="column" gap="4px" align="start">
                <Text fontSize="18px" lineHeight="24px" fontWeight="400">
                  {label}
                </Text>
                {subLabel && (
                  <Text
                    color="Neutrals.600"
                    fontWeight="normal"
                    lineHeight="20px"
                    fontSize="sm"
                  >
                    {subLabel}
                  </Text>
                )}
              </Flex>
              {hasRightIcon && <Icon as={ChevronDownIcon} />}
            </Flex>
            {isNested && (
              <span aria-hidden style={{ fontSize: 10, alignSelf: 'center' }}>
                <Icon
                  as={ChevronRightIcon}
                  fontSize="lg"
                  stroke="neutrals.500"
                />
              </span>
            )}
          </Flex>
        </Button>

        <MenuContext.Provider
          value={{
            activeIndex,
            setActiveIndex,
            getItemProps,
            setHasFocusInside,
            isOpen,
          }}
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal={false}
                  initialFocus={isNested ? -1 : 0}
                  returnFocus={!isNested}
                >
                  <Flex
                    flexDir="column"
                    p="12px"
                    maxW="425px"
                    bg="alpha.white"
                    border="1px solid"
                    gap="8px"
                    borderColor="#EAECF0"
                    borderRadius="12px"
                    shadow="md"
                    _focus={{
                      outline: 'none',
                    }}
                    ref={refs.setFloating}
                    style={{
                      ...floatingStyles,
                    }}
                    {...getFloatingProps()}
                  >
                    {children}
                  </Flex>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </FloatingList>
        </MenuContext.Provider>
      </FloatingNode>
    );
  }
);

MenuComponent.displayName = 'MenuComponent';

export default MenuComponent;
