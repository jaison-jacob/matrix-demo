import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import { matrixPath } from "../routes/routePath";

const sideBarData = [
  {
    label: "Visit",
    icon: NewspaperOutlinedIcon,
    routePath: matrixPath.VISIT,
    routeKey: "visit",
    menuId: ["pat1", "cod1"],
    pageName: "Visit Assessment Information",
  },
  {
    label: "1500 Form",
    icon: AddToQueueIcon,
    routePath: matrixPath.CLAIM_FORM,
    routeKey: "claimForm",
    menuId: ["pat1", "cod1"],
    pageName: "Health Insurance Claim Form",
  },
  {
    label: "coding Validation",
    icon: FactCheckOutlinedIcon,
    routePath: matrixPath.CODING,
    routeKey: "coding-validation",
    menuId: ["cod1"],
    pageName: "Coding Validation",
  },
  {
    label: "On BoardForm",
    icon: CottageOutlinedIcon,
    routePath: matrixPath.ONBOARD_FORM,
    routeKey: "onboardForm",
    menuId: ["cod1", "pat1"],
    pageName: "On Board From",
  },
];

export { sideBarData };
