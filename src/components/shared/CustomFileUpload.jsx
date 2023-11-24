/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { FormControl, FormHelperText, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { errorMsg } from "../../utils/snackMsgTrigger";
import { useDispatch } from "react-redux";
const InputField = styled("input")(() => ({
  display: "none",
}));

const FileInputHolder = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: 10,
  border: "1px dashed #c4c4c4",
  height: "45px !important",
  borderRadius: 5,
  svg: { fontSize: "25px" },
}));

const ImgTag = styled("img")(() => ({
  height: 35,
  width: 35,
  borderRadius: "50%",
  marginRight: 12,
}));

export function CustomFileUpload({
  name,
  label,
  type,
  url,
  value,
  sytle,
  onChange,
  isViewMode,
  defaultLabel,
  disabled,
  isMultirec,
  uploadFile,
  accept,
  touched,
  errors,
  customHelpertext,
}) {
  const [imgUrl, setImgUrl] = React.useState("");
  const [fileName, setFileName] = React.useState(value && value[0]?.name);
  const dispatch = useDispatch();
  const myRefname = useRef(null);
  const handleClick = (e) => {
    myRefname.current.click();
  };
  const onImageChange = (event) => {
    if (event.target.files[0].size > 10000000) {
      return dispatch(errorMsg("Size should be less than 10MB"));
    } else if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (type === "Image" || type === "GIF") {
          setImgUrl(reader.result);
        }
        // onChange(name, event.target.files[0]);
        // onChange([event.target.files[0]]);
        onChange(event);
        if (!isMultirec) {
          setFileName(event.target.files[0].name);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (type === "Image" || type === "GIF") {
      setImgUrl(url);
    }
  }, [type, url]);

  useEffect(() => {
    if (value === "") {
      setFileName(defaultLabel);
    } else if (typeof value === "string") {
      setFileName(label);
    }
  }, [value]);
  const errorBorder =
    errors?.[name] && touched?.[name]
      ? {
          border: "1.8px dashed #d32f2f",
        }
      : {};

  const errorText =
    errors?.[name] && touched?.[name] ? { color: "#d32f2f" } : {};
  const imageIcon = () => {
    if ((type === "Image" || type === "GIF") && imgUrl) {
      return <ImgTag src={imgUrl} alt=""></ImgTag>;
    } else if (type === "Audio") {
      return (
        <IconButton>
          <AudioFileIcon />
        </IconButton>
      );
    } else if (type === "Video") {
      return (
        <IconButton>
          <VideoFileIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton>
          <AddPhotoAlternateIcon />
        </IconButton>
      );
    }
  };
  return (
    <FormControl fullWidth>
      <InputField
        ref={myRefname}
        name={name}
        type={"file"}
        onChange={(event) => onImageChange(event)}
        label={label}
        disabled={disabled}
        accept={type === "GIF" ? "image/*" : accept}
        error={Boolean(customHelpertext || (touched?.[name] && errors?.[name]))}
      />
      <FileInputHolder
        style={{ ...errorBorder, cursor: "pointer" }}
        onClick={(e) => handleClick(e)}
      >
        {imageIcon()}
        <span
          style={{
            color: "#7E7575",
            fontFamily: "Poppins",
            fontSize: "13px",
            width: "90%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            ...errorText,
          }}
        >
          {fileName || label}
        </span>
      </FileInputHolder>
      <FormHelperText error>
        {customHelpertext || (touched?.[name] && errors?.[name])}
      </FormHelperText>
    </FormControl>
  );
}
