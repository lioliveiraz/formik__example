export const formSchema = [
  {
    component: "page",
    label: "General Information",
    _uid: "0c946643-5a83-4545-baea-055b27b51e8a",
    fields: [
      {
        component: "text",
        label: "Country",
        type: "text",
        required: true,
        _uid: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
      {
        component: "text",
        label: "Primary Dealer",
        type: "text",
        required: false,
        _uid: "f61233e8-565e-43d0-9c14-7d7f220c6020",
      },
      {
        component: "options",
        label: "Province",
        type: "select",
        required: false,

        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "North Holland",
            value: "North Holland",
          },
          {
            component: "option",
            label: "Utrecht",
            value: "Utrecht",
          },
          {
            component: "option",
            label: "North Brabant",
            value: "North Brabant",
          },
        ],
      },
      {
        component: "options",
        label: "City",
        type: "select",
        required: false,
        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "North Holland",
          field: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        },
        options: [
          {
            component: "option",
            label: "Amsterdam",
            value: "one",
          },
          {
            component: "option",
            label: "Assendeflt",
            value: "two",
          },
          {
            component: "option",
            label: "Amstelven",
            value: "two",
          },
          {
            component: "option",
            label: "Bergen",
            value: "two",
          },
        ],
      },
      {
        component: "options",
        label: "City",
        type: "select",
        required: false,

        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "Utrecht",
          field: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        },
        options: [
          {
            component: "option",
            label: "Grote Melm",
            value: "one",
          },
          {
            component: "option",
            label: "Haspel",
            value: "two",
          },
          {
            component: "option",
            label: "Jaarsveld",
            value: "two",
          },
          {
            component: "option",
            label: "Lage Vuursche",
            value: "two",
          },
        ],
      },
      {
        component: "options",
        label: "City",
        type: "select",
        required: false,

        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "North Brabant",
          field: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        },
        options: [
          {
            component: "option",
            label: "Besselaar",
            value: "one",
          },
          {
            component: "option",
            label: "Boxmeer",
            value: "two",
          },
          {
            component: "option",
            label: "Buurtje",
            value: "two",
          },
          {
            component: "option",
            label: "De Bus",
            value: "two",
          },
        ],
      },
      {
        component: "options",
        label: "Type of business",
        type: "select",
        required: true,

        _uid: "45drhh5t-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "Type 1",
            value: "one",
          },
          {
            component: "option",
            label: "Type 2",
            value: "two",
          },
          {
            component: "option",
            label: "Type 3",
            value: "two",
          },
          {
            component: "option",
            label: "Type 4",
            value: "two",
          },
        ],
      },
    ],
  },
  {
    component: "page",
    label: "Business and contact details",
    _uid: "3a30803f-135f-442c-ab6e-d44d7d7a5164",
    fields: [
      {
        component: "options",
        label: "Primary use",
        type: "select",
        required: true,

        _uid: "fdsfsefe4-d479-49ae-ad66-c2c475daa66b",
        options: [
          {
            component: "text",
            label: "use 1",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98",
          },
          {
            component: "text",
            label: "use 2",
            type: "text",
            _uid: "543gdhgd-80a7-4427-b07b-4c1be1c6b186",
          },
          {
            component: "text",
            label: "use 3",
            type: "text",
            _uid: "4sdf43s-80a7-4427-b07b-4c1be1c6b186",
          },
        ],
      },

      {
        component: "text",
        label: "Federal Tax ID",
        type: "text",
        required: true,
        _uid: "j75d43d-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
      {
        component: "text",
        label: "Phone Number",
        type: "text",
        required: true,
        _uid: "dasgr453d-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
      {
        component: "text",
        label: "Email address ",
        type: "email",
        required: true,
        _uid: "gdsgdhb4-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
      {
        component: "text",
        label: "Are you current a customer?",
        type: "checkbox",
        required: false,
        _uid: "6fgfgfs-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
    ],
  },
  {
    component: "page",
    label: "Your customer Details",
    _uid: "cd392929-c62e-4cdb-b4dd-914035c1cc8d",
    conditional: {
      value: true,
      field:
        "3a30803f-135f-442c-ab6e-d44d7d7a5164_6fgfgfs-f8ba-40b9-bf5d-0d57bc9c6a8d",
    },
    fields: [
      {
        component: "text",
        label: "Customer ID",
        type: "text",
        required: true,
        _uid: "a15bef56-ab67-4b98-a781-4441cc3bba56",
      },
      {
        component: "options",
        label: "Title",
        type: "select",
        required: false,
        _uid: "saf4dxfg-ab67-4b98-a781-4441cc3bba56",
        options: [
          {
            component: "text",
            label: "Mr",
            type: "text",
            _uid: "65fhfty-32f2-42a1-b89f-203dfc0b6b98",
          },
          {
            component: "text",
            label: "Miss",
            type: "text",
            _uid: "fhtru7hy-80a7-4427-b07b-4c1be1c6b186",
          },
          {
            component: "text",
            label: "Ms",
            type: "text",
            _uid: "fsdfset5-80a7-4427-b07b-4c1be1c6b186",
          },
        ],
      },
      {
        component: "field_group",
        label: "Name",
        _uid: "76gfhfg-4cd9-4513-b673-87c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "First Name",
            type: "text",
            required: true,
            _uid: "765fhkk-32f2-42a1-b89f-203dfc0b6b98",
          },
          {
            component: "text",
            label: "Last Name",
            type: "text",
            required: true,

            _uid: "9fghd4-80a7-4427-b07b-4c1be1c6b186",
          },
        ],
      },
    ],
  },
  {
    component: "page",
    label: "Create your users details",
    _uid: "1dd4ec7c-fb53-47f4-af1b-1ab8f805b888",
    conditional: {
      value: false,
      field:
        "3a30803f-135f-442c-ab6e-d44d7d7a5164_6fgfgfs-f8ba-40b9-bf5d-0d57bc9c6a8d",
    },
    fields: [
      {
        component: "field_group",
        label: "Name",
        _uid: "76gfhfg-4cd9-4513-b673-87c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "Last Name",
            type: "text",
            required: true,
            _uid: "54hgf3se-80a7-4427-b07b-4c1be1c6b186",
          },
        ],
      },
      {
        component: "text",
        label: "Company Email",
        type: "text",
        required: true,

        _uid: "gdshht5-32f2-42a1-b89f-203dfc0b6b98",
      },
    ],
  },
  {
    component: "page",
    label: "Last step",
    _uid: "0c946643-5a83-4545-baea-065b27b51e8a",
    fields: [
      {
        component: "text",
        label: "Final Comment",
        type: "text",
        required: false,

        _uid: "f61231e8-565e-43d0-9c14-7d7f220c6020",
      },
    ],
  },
];
