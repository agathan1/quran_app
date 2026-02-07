import * as Yup from "yup";

export const imsyakschema = Yup.object({
  provinsi: Yup.string().required("Provinsi wajib dipilih"),
  kabupaten: Yup.string().required("Kabupaten wajib dipilih"),
});