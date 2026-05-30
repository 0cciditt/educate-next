// Icon barrel — backed by react-icons (Heroicons v2 outline + Font Awesome brands).
// Consumers import named icons from here and style them with Tailwind `w-/h-`
// (size) and `text-*` (color) classes, which react-icons honors via CSS width
// and `currentColor`. Keeping the names stable means swapping the underlying
// glyph never touches consumer components.
export {
  HiOutlineMapPin as PinIcon,
  HiOutlinePhone as PhoneIcon,
  HiOutlineCheck as CheckIcon,
  HiOutlineAcademicCap as GraduationCapIcon,
  HiOutlineUserGroup as UsersIcon,
  HiOutlineClock as ClockIcon,
  HiOutlineTrophy as TrophyIcon,
  HiOutlineMegaphone as MegaphoneIcon,
  HiOutlineGlobeAlt as GlobeIcon,
  HiOutlineArrowTrendingUp as TrendUpIcon,
  HiOutlineComputerDesktop as MonitorIcon,
  HiOutlineBuildingLibrary as BuildingIcon,
  HiOutlineArrowsRightLeft as ShuffleIcon,
  HiOutlineBars3 as MenuIcon,
  HiOutlineXMark as CloseIcon,
  HiOutlineBookOpen as BookOpenIcon,
  HiOutlineCalculator as CalculatorIcon,
  HiOutlineBeaker as BeakerIcon,
  HiOutlineSparkles as SparklesIcon,
  HiOutlineRocketLaunch as RocketLaunchIcon,
  HiOutlinePencilSquare as PencilSquareIcon,
  HiOutlineAdjustmentsHorizontal as AdjustmentsIcon,
  HiOutlineClipboardDocumentCheck as ClipboardCheckIcon,
} from "react-icons/hi2";

// WhatsApp uses its real brand mark rather than a generic chat bubble.
export { FaWhatsapp as WhatsAppIcon } from "react-icons/fa6";
