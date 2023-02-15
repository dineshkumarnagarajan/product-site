export let DATA = [
    {
      name: "Pending",
      site_view: 6,
      capacity: 12,
      proposal: 6,
      customer_approval: 6,
      booking_advance: 6,
      site_inspection: 6,
      material_purchase: 6,
      highlight:false
    },
  
    {
      name: "Actual",
      site_view: 7,
      capacity: 14,
      proposal: 7,
      customer_approval: 7,
      booking_advance: 7,
      site_inspection: 7,
      material_purchase: 7,
      highlight:false
    },
  
    {
      name: "Target",
      site_view: 8,
      capacity: 16,
      proposal: 8,
      customer_approval: 8,
      booking_advance: 8,
      site_inspection: 8,
      material_purchase: 8,
      highlight:false
    },
  
    {
      name: "Completed",
      site_view: 9,
      capacity: 18,
      proposal: 9,
      customer_approval: 9,
      booking_advance: 9,
      site_inspection: 9,
      material_purchase: 9,
      highlight:false
    }
  ];

  
  export const TABLE_HEADER = [
   {
      id: "site_view",
      numeric: false,
      disablePadding: true,
      label: "Site View",
      hidden: false,
  },
  {
    id: "proposal",
    numeric: false,
    disablePadding: true,
    label: "Proposal",
    hidden: false
  },
  {
    id: "customer_approval",
    numeric: true,
    disablePadding: false,
    label: "Customer Approval",
    hidden: false
  },
  {
    id: "booking_advance",
    numeric: true,
    disablePadding: false,
    label: "Booking Advance",
    hidden: false
  },
  {
    id: "site_inspection",
    numeric: true,
    disablePadding: false,
    label: "Site Inspection",
    hidden: false
  },
  {
    id: "material_purchase",
    numeric: true,
    disablePadding: false,
    label: "Material Purchase",
    hidden: false
  }
];
  // export const TABLE_HEADER = [
  //   "Site View",
  //   "Proposal",
  //   "Customer Approval",
  //   "Booking Advance",
  //   "Site Inspection",
  //   "Material Purchase",
  // ];

  export const PLANT_DATA = {
    plant_name: "SPR CITY",
    plant_id: "45676545",
    plant_details: "Chennai, 2kW, Sales",
    site_view: 1,
    site_view_date: "12/10 - 15/10",
    capacity: 2,
    proposal: 3,
    proposal_date: "12/10 - 15/10",
    customer_approval: 4,
    customer_approval_date: "12/10 - 15/10",
    booking_advance: 5,
    booking_advance_date: "12/10 - 15/10",
    site_inspection: 6,
    site_inspection_date: "12/10 - 15/10",
    material_purchase: 7,
    material_purchase_date: "12/10 - 15/10",
  };

  export const DATA_TASKS = [
    {
      task_name: "Site Visit",
      status: "Open",
      owner: "Santosh Adiga",
      function: "Sales",
      role: "FSE",
      start_date: "25/12/21",
      expected_tat: "5d",
      due_date: "30/12/21",
      completion_date: "30/12/21",
      actual_tat: "5d",
    },
    {
      task_name: "Site Visit",
      status: "Open",
      owner: "Ramanathan Sundararajan",
      function: "Sales",
      role: "FSE",
      start_date: "25/12/21",
      expected_tat: "5d",
      due_date: "30/12/21",
      completion_date: "30/12/21",
      actual_tat: "5d",
    },
  ];

  export const DATA_DOCUMENTS = [
    {
      doc_id: "0123456",
      doc_name: "Proposal",
      owner: "Santosh Adiga",
      role: "FSE",
      date_of_upload: "25/12/21",
      version: "1.0",
      type: "PDF",
    },
    {
      doc_id: "0123457",
      doc_name: "Proposal",
      owner: "Ramanathan Sundararajan",
      role: "FSE",
      date_of_upload: "25/12/21",
      version: "1.0",
      type: "PDF",
    },
  ];