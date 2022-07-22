import { FC } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  BanIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
  EyeIcon,
  ChevronUpIcon,
  ClipboardIcon,
  ChevronLeftIcon,
  DotsVerticalIcon,
  PlusIcon,
  FilterIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  SwitchVerticalIcon,
  LightBulbIcon,
  MoonIcon,
  UserIcon,
  LocationMarkerIcon,
  TableIcon,
  TemplateIcon,
  DocumentTextIcon,
  UserAddIcon,
} from "@heroicons/react/outline";

import { AdjustmentsIcon } from "@heroicons/react/solid";

interface Props {
  name: string;
  className?: string;
  onClick?: () => any;
}

export const Icon: FC<Props> = ({ name, ...props }: Props) => {
  switch (name) {
    case "user-add":
      return <UserAddIcon {...props} />;

    case "document":
      return <DocumentTextIcon {...props} />;

    case "template":
      return <TemplateIcon {...props} />;

    case "table":
      return <TableIcon {...props} />;

    case "location":
      return <LocationMarkerIcon {...props} />;

    case "user":
      return <UserIcon {...props} />;

    case "theme-light":
      return <LightBulbIcon {...props} />;

    case "theme-dark":
      return <MoonIcon {...props} />;

    case "plus":
      return <PlusIcon {...props} />;

    case "dots-vertical":
      return <DotsVerticalIcon {...props} />;

    case "chevron-left":
      return <ChevronLeftIcon {...props} />;

    case "chevron-right":
      return <ChevronRightIcon {...props} />;

    case "chevron-down":
      return <ChevronDownIcon {...props} />;

    case "chevron-up":
      return <ChevronUpIcon {...props} />;

    case "chevron-double-left":
      return <ChevronDoubleLeftIcon {...props} />;

    case "adjustments":
      return <AdjustmentsIcon {...props} />;

    case "x":
      return <XIcon {...props} />;

    case "menu":
      return <MenuIcon {...props} />;

    case "search":
      return <SearchIcon {...props} />;

    case "eye":
      return <EyeIcon {...props} />;

    case "clipboard":
      return <ClipboardIcon {...props} />;

    case "filter":
      return <FilterIcon {...props} />;

    case "arrow-down":
      return <ArrowSmDownIcon {...props} />;

    case "arrow-up":
      return <ArrowSmUpIcon {...props} />;

    case "switch-vertical":
      return <SwitchVerticalIcon {...props} />;

    default:
      return <BanIcon />;
  }
};
