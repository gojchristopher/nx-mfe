import {
  AnnotationXIcon,
  BankIcon,
  BankNoteIcon,
  BellIcon,
  CheckDoneLeftIcon,
  CheckShieldIcon,
  CheckSquareBrokenIcon,
  CircleSwitchHorizontal,
  CircleUserIcon,
  ClockRewindIcon,
  CogIcon,
  CoinsHandIcon,
  CoinsSwapIcon,
  CreditCardDownIcon,
  CreditCardDownloadIcon,
  CreditCardUpIcon,
  CreditCardUploadIcon,
  CurrencyEuroCircleIcon,
  EditUsersIcon,
  FileIcon,
  FileMiniListIcon,
  FileQuestionMarkIcon,
  FileSearchIcon,
  HourGlassIcon,
  LockKeyHoleCircleIcon,
  MarkerPin,
  MarkerPinFlag,
  MarkerPinLocationIcon,
  MessageDotsSquareIcon,
  MessageTextCircleIcon,
  MonitorIcon,
  ScaleCircleIcon,
  ScalesIcon,
  ShareIcon,
  ShoppingCartIcon,
  SlidersIcon,
  TagIcon,
  TagsIcon,
  UserCheckIcon,
  UserSquareDownIcon,
  UserSquareIcon,
  UsersIcon,
  UserIcon,
} from '@nexius/microapps';
import { MenuItemProps } from '../Components/Menu/MenuItem';

interface ExtendedMenuItemProps extends MenuItemProps {
  innerMenu?: MenuItemProps[];
}
export interface NavigationMenuContext {
  id: string;
  menu: string;
  submenu?: ExtendedMenuItemProps[];
}

const operators: ExtendedMenuItemProps[] = [
  {
    label: 'Account Management',
    icon: EditUsersIcon,
    subLabel: 'Manage operators',
  },
  {
    label: 'Permission Group',
    subLabel: 'Set group permissions',
    icon: CheckShieldIcon,
  },
];

const memberReports: ExtendedMenuItemProps[] = [
  {
    label: 'Member Access Audit History',
    icon: ClockRewindIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Member IP Address Summary',
    icon: MarkerPinFlag,
    subLabel: 'Supporting text',
  },
  {
    label: 'IP Address Summary',
    icon: MarkerPin,
    subLabel: 'Supporting text',
  },
  {
    label: 'Member Access Summary Report',
    icon: LockKeyHoleCircleIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Member Interaction Logs Reports',
    icon: FileSearchIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Member Session Duration',
    icon: HourGlassIcon,
    subLabel: 'Supporting text',
  },
];

const members: ExtendedMenuItemProps[] = [
  {
    label: 'Member Management',
    icon: UsersIcon,
    subLabel: 'Manage members',
  },
  {
    label: 'Marker Management',
    icon: TagsIcon,
    subLabel: 'Manage member markers',
  },
  {
    label: 'Label Management',
    icon: TagIcon,
    subLabel: 'Manage member labels',
  },
  {
    label: 'Online Members',
    icon: UserCheckIcon,
    subLabel: 'Members how are online',
  },
  {
    label: 'Profile Setting',
    icon: CircleUserIcon,
    subLabel: 'Member profile configuration',
  },
  {
    label: 'Member Management Config',
    icon: CircleSwitchHorizontal,
    subLabel: 'Account duplication configuration',
  },
  {
    label: 'Bulk Update',
    icon: ShareIcon,
    subLabel: 'Bulk status and balance update',
  },
  {
    label: 'Member Reports',
    icon: FileIcon,
    subLabel: 'Reports history and summary',
    innerMenu: memberReports,
  },
];

const affiliate: ExtendedMenuItemProps[] = [
  {
    label: 'Affiliate Programme',
    icon: UserIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Affiliate Criteria',
    icon: CheckDoneLeftIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Affiliate Request',
    icon: FileQuestionMarkIcon,
    subLabel: 'Supporting text',
  },
];

const deposit: ExtendedMenuItemProps[] = [
  {
    label: 'Internal Deposit Request',
    icon: CreditCardUploadIcon,
    subLabel: 'Supporting text',
  },
  {
    label: '3rd Party Deposit Request',
    icon: CreditCardUpIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Payment Method Listing',
    icon: FileMiniListIcon,
    subLabel: 'Supporting text',
  },
  {
    label: '3rd Party Deposit Providers',
    icon: BankIcon,
    subLabel: 'Supporting text',
  },
];

const withdrawals: ExtendedMenuItemProps[] = [
  {
    label: 'Withdrawal Requests',
    icon: CreditCardDownloadIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Withdrawal Method',
    icon: CoinsHandIcon,
    subLabel: 'Supporting text',
  },
  {
    label: '3rd Party Withdrawal Providers',
    icon: CreditCardDownIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Compliance Check',
    icon: CheckSquareBrokenIcon,
    subLabel: 'Supporting text',
  },
];

const systemManagement: ExtendedMenuItemProps[] = [
  {
    label: 'Site Config',
    icon: CogIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Alerts and Notifications',
    icon: BellIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Marquee Messages',
    icon: MessageDotsSquareIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Rotating Banner',
    icon: ScaleCircleIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Geo-Fencing',
    icon: MarkerPinLocationIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Category / Vendor Config (Portrait App)',
    icon: UserSquareIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Category / Vendor Config (Desktop Website)',
    icon: MonitorIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Common Configurations',
    icon: SlidersIcon,
    subLabel: 'Supporting text',
  },
];

const reports: ExtendedMenuItemProps[] = [
  {
    label: 'Daily Operating Report',
    icon: FileMiniListIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Member Bet Records',
    icon: BankNoteIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Balance Transaction Records',
    icon: CoinsSwapIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Rebates Reports',
    icon: ShoppingCartIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Balance Service Record Report',
    icon: ScalesIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Member Summary Report',
    icon: UserSquareDownIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'EU Reports',
    icon: CurrencyEuroCircleIcon,
    subLabel: 'Supporting text',
  },
];

const systemMessage: ExtendedMenuItemProps[] = [
  {
    label: 'Manual Message',
    icon: MessageTextCircleIcon,
    subLabel: 'Supporting text',
  },
  {
    label: 'Automated Message',
    icon: AnnotationXIcon,
    subLabel: 'Supporting text',
  },
];

const navigationMenuTitle: NavigationMenuContext[] = [
  { id: 'dashboard', menu: 'Dashboard' },
  { id: 'operators', menu: 'Operators', submenu: operators },
  { id: 'members', menu: 'Members', submenu: members },
  { id: 'affiliates', menu: 'Affiliates', submenu: affiliate },
  { id: 'deposit', menu: 'Deposit', submenu: deposit },
  { id: 'withdrawals', menu: 'Withdrawals', submenu: withdrawals },
  { id: 'promo', menu: 'Promo' },
  { id: 'vip', menu: 'VIP' },
  { id: 'rebates', menu: 'Rebates' },
  { id: 'reports', menu: 'Reports', submenu: reports },
  {
    id: 'system-mamanagement',
    menu: 'System Management',
    submenu: systemManagement,
  },
  { id: 'system-message', menu: 'System Message', submenu: systemMessage },
];

export {
  navigationMenuTitle,
  operators,
  reports,
  members,
  affiliate,
  deposit,
  withdrawals,
  systemManagement,
  systemMessage,
};
