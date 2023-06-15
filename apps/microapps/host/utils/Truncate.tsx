import { Flex } from '@highoutput/hds';
import React, { useRef, useEffect } from 'react';

type RenderTruncator = ({
  hiddenItemsCount,
}: {
  hiddenItemsCount: number;
}) => React.ReactNode;

export type TruncatedListProps = {
  renderTruncator: RenderTruncator;
  children?: React.ReactNode;
  alwaysShowTruncator?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const rectContainsRect = (parent: DOMRect, child: DOMRect) => {
  return (
    child.top >= parent.top &&
    child.bottom <= parent.bottom &&
    child.left >= parent.left &&
    child.right <= parent.right
  );
};

export function Truncate({
  renderTruncator,
  alwaysShowTruncator,
  children,
  className,
  style,
}: TruncatedListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const childArray = React.Children.toArray(children);

  useEffect(() => {
    const truncate = () => {
      if (!containerRef.current) {
        return;
      }

      containerRef.current.style.overflow = 'hidden';
      const childNodes = Array.from(
        containerRef.current.children
      ) as HTMLElement[];

      // Show all items, hide all truncators.
      for (let i = 0; i < childNodes.length; ++i) {
        const childNode = childNodes[i];
        childNode.hidden = i % 2 === 0;
      }

      // If there are no items (the last truncator is always included).
      if (childNodes.length === 1) {
        return;
      }

      //
      // Test if truncation is necessary.
      //
      if (alwaysShowTruncator) {
        // if the last truncator fits, exit
        const truncatorEl = childNodes[childNodes.length - 1];
        truncatorEl.hidden = false;

        if (
          rectContainsRect(
            containerRef.current.getBoundingClientRect(),
            truncatorEl.getBoundingClientRect()
          )
        ) {
          return;
        }
        truncatorEl.hidden = true;
      } else {
        // if the last item fits, exit
        const itemEl = childNodes[childNodes.length - 2];
        if (
          rectContainsRect(
            containerRef.current.getBoundingClientRect(),
            itemEl.getBoundingClientRect()
          )
        ) {
          return;
        }
      }

      //
      // Go backward and find the last truncator that can fit.
      //
      for (let i = childNodes.length - 2; i >= 1; i -= 2) {
        const itemEl = childNodes[i];
        const truncatorEl = childNodes[i - 1];
        itemEl.hidden = true;
        truncatorEl.hidden = false;

        if (
          rectContainsRect(
            containerRef.current.getBoundingClientRect(),
            truncatorEl.getBoundingClientRect()
          )
        ) {
          return;
        }

        truncatorEl.hidden = true;
      }
    };

    truncate();

    const resizeObserver = new ResizeObserver((entries) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of entries) {
        truncate();
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [children, alwaysShowTruncator, className, style]);

  const items = childArray.map((item, i) => {
    if (React.isValidElement(item)) {
      const truncated = renderTruncator({
        hiddenItemsCount: childArray.length - i,
      });

      return (
        <React.Fragment key={`${item.key}`}>
          <Flex hidden>{truncated}</Flex>
          <Flex>{item}</Flex>
        </React.Fragment>
      );
    }
  });

  return (
    <Flex
      ref={containerRef}
      className={`react-truncate-list ${className || ''}`}
      style={style}
      w="full"
    >
      {items}

      <Flex hidden>{renderTruncator({ hiddenItemsCount: 0 })}</Flex>
    </Flex>
  );
}
