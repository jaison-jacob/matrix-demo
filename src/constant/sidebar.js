import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { matrixPath } from "../routes/routePath";

const sideBarData = [
  {
    label: "Visit",
    icon: NewspaperOutlinedIcon,
    routePath: matrixPath.VISIT,
    routeKey: "visit",
    menuId: "pat1",
    pageName: "Visit Assessment Information",
  },
  {
    label: "1500 Form",
    icon: AddToQueueIcon,
    routePath: matrixPath.ONBOARD_FORM,
    routeKey: "claimForm",
    menuId: "pat1",
    pageName: "Health Insurance Claim Form",
  },
  {
    label: "coding Validatation",
    icon: FactCheckOutlinedIcon,
    routePath: matrixPath.CODING,
    routeKey: "Validatation",
    menuId: "cod1",
    pageName: "Coding Validation",
  },
];

export { sideBarData };
