import * as Yup from "yup";

const locationSchema = Yup.object().shape({
  locationTypeId: Yup.number()
    .min(1, "Required")
    .max(5, "Required")
    .required("Required"),
  lineOne: Yup.string().min(2).max(255).required("Required"),
  lineTwo: Yup.string().max(255).nullable(),
  city: Yup.string().min(2).max(50).required("Required"),
  zip: Yup.string().max(50).nullable(),
  stateId: Yup.number().min(1, "Required").max(51).required("Required"),
  latitude: Yup.number().min(-90.0).max(90.0).required("Required"),
  longitude: Yup.number().min(-180.0).max(180.0).required("Required"),
});

export default locationSchema;
