import { FieldConfig } from "../types/form";

export const formConfig: FieldConfig[] = [
    {
        "name": "fullName",
        "label": "Full Name",
        "fieldType": "TEXT",
        "required": true
    },
    {
        "name": "email",
        "label": "Email",
        "fieldType": "TEXT",
        "required": true
    },
    {
        "name": "gender",
        "label": "Gender",
        "fieldType": "RADIO",
        "required": true,
        "options": [
            "Male",
            "Female",
            "Other"
        ]
    }
]