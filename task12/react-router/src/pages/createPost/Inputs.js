const Inputs = [
  {
    label: "Title",
    validations: {
      required: "Field is required",
      maxLength: { value: 50, message: "Max length is of 50 characters" },
    },
  },
  {
    label: "Body",
    type: "textarea",
    validations: {
      required: "Field is required",
      maxLength: { value: 300, message: "Max length is of 300 characters" },
    },
  }
];

export default Inputs;