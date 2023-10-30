import * as Yup from "yup"
export const flashcardSchema=Yup.object().shape({
    groups:Yup.object().shape({
        group:Yup.string()
        .min(5,"Minimum character length is 5")
        .max(10,'You have reached max length i.e. 10')
        .required("Required"),
    groupDesc:Yup.string()
    .min(20,"Minimum character length is 20")
    .max(100, "You have reached the max length i.e. 100")
    .required("Required")
    }),

    terms:Yup.array(
        Yup.object().shape({
            term:Yup.string()
            .min(5,"Minimum character length is 5")
    .max(10, "You have reached the max length i.e. 10")
    .required("Required"),

    defination:Yup.string()
    .min(20,"Minimum character length is 20")
    .max(100, "You have reached the max length i.e. 100")
    .required("Required")
        })
    ),
});