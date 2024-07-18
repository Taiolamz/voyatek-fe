import Routes from "./routes";
import AccountIcon from "../../public/assets/icons/AccountIcon";
import SecurityIcon from "../../public/assets/icons/SecurityIcon";
import NotifyIcon from "../../public/assets/icons/NotifyIcon";
import PricingIcon from "../../public/assets/icons/PricingIcon";
import SalesIcon from "../../public/assets/icons/SalesIcon";
import UsersIcon from "../../public/assets/icons/UsersIcon";
import BackupIcon from "../../public/assets/icons/BackupIcon";
import {
  ActiveSettingsIcon,
  BellIcon,
  InquiriesIcon,
  WalletIcon,
} from "../../public/assets/icons";

export const sidebar = [
  {
    label: "Account",
    icon: AccountIcon,
    path: Routes.Account(),
  },
  {
    label: "Security",
    icon: SecurityIcon,
    path: Routes.Security(),
  },

  {
    label: "Notifications",
    icon: NotifyIcon,
    path: Routes.Notifications(),
  },
  {
    label: "Pricing",
    icon: PricingIcon,
    path: Routes.Pricing(),
  },
  {
    label: "Sales",
    icon: SalesIcon,
    path: Routes.Sales(),
  },
  {
    label: "Users & Roles",
    icon: UsersIcon,
    path: Routes.UsersAndRoles(),
  },
  {
    label: "Backups",
    icon: BackupIcon,
    path: Routes.Backups(),
  },
];

export const navbarDetails = [
  {
    label: "Notifications",
    icon: BellIcon,
  },
  {
    label: "Wallet",
    icon: WalletIcon,
  },
  {
    label: "Inquiries",
    icon: InquiriesIcon,
  },
  {
    label: "Settings",
    icon: ActiveSettingsIcon,
  },
];

export const dashboardTableHeadData = ["Name", "Email", "Roles", "Actions"];
export const dashboardTableBodyData = [
  {
    name: "Taiwo Isaac",
    address: "taiwoisaac@email.com",
    role: "Administrator",
  },
  {
    name: "Taiwo Isaac",
    address: "taiwoisaac@email.com",
    role: "Sales Manager",
  },
  {
    name: "Taiwo Isaac",
    address: "taiwoisaac@email.com",
    role: "Sales Manager",
  },
  {
    name: "Taiwo Isaac",
    address: "taiwoisaac@email.com",
    role: "Sales Representative",
  },
];
