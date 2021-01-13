CREATE SCHEMA **schema**;
ALTER SCHEMA **schema** OWNER TO postgres;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE **schema**.**prefix**_hospitals (
    hospital_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_name CHARACTER VARYING(200) NOT NULL,
    code CHARACTER VARYING(200) DEFAULT NULL,
    email CHARACTER VARYING(200) NOT NULL,
    country_id int NOT NULL,
    state_id int NOT NULL,
    city_id int NOT NULL,
    address TEXT DEFAULT NULL,
    area_code CHARACTER VARYING(200) DEFAULT NULL,
    phone CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_hospitals_ibfk_1 FOREIGN KEY(country_id) REFERENCES eradcare.erc_countries(country_id),
    CONSTRAINT cli_hospitals_ibfk_2 FOREIGN KEY(state_id) REFERENCES eradcare.erc_states(state_id),
    CONSTRAINT cli_hospitals_ibfk_3 FOREIGN KEY(city_id) REFERENCES eradcare.erc_cities(city_id)
);
ALTER TABLE **schema**.**prefix**_hospitals OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_holidays (
    holiday_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    holiday_on DATE NOT NULL,
    description TEXT DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_holidays_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id)
);
ALTER TABLE **schema**.**prefix**_holidays OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_roles (
    role_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dashboardconfig_ids text
);
ALTER TABLE **schema**.**prefix**_roles OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_designations (
    designation_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_id uuid NOT NULL,
    designation_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_designations_ibfk_1 FOREIGN KEY(role_id) REFERENCES **schema**.**prefix**_roles(role_id)
);
ALTER TABLE **schema**.**prefix**_designations OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_users (
    user_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    department_id uuid NOT NULL,
    role_id uuid NOT NULL,
    designation_id uuid NOT NULL,
    country_id int NOT NULL,
    state_id int NOT NULL,
    city_id int NOT NULL,
    first_name CHARACTER VARYING(200) NOT NULL,
    last_name CHARACTER VARYING(200) DEFAULT NULL,
    middle_name CHARACTER VARYING(200) ,
    profile_image CHARACTER VARYING(200) DEFAULT NULL,
    gender SMALLINT NOT NULL DEFAULT '0',
    date_of_birth DATE NOT NULL,
    email_id CHARACTER VARYING(200) NOT NULL UNIQUE,
    phone_number CHARACTER VARYING(200) NOT NULL,
    login_username CHARACTER VARYING(200) NOT NULL UNIQUE,
    login_password CHARACTER VARYING(200) NOT NULL,
    zip_code CHARACTER VARYING(200) DEFAULT NULL,
    address TEXT DEFAULT NULL,
    date_of_joining DATE NOT NULL,
    experience REAL NOT NULL DEFAULT '0',
    pms_number INTEGER NOT NULL DEFAULT '0',
    rpr_number INTEGER NOT NULL DEFAULT '0',
    activation_key CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    image_name character varying(200),
    forgot_password_key character varying(200) ,
    forgot_password_creation_time TIMESTAMPTZ ,
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_users_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_users_ibfk_2 FOREIGN KEY(department_id) REFERENCES eradcare.erc_departments(department_id),
    CONSTRAINT cli_users_ibfk_3 FOREIGN KEY(role_id) REFERENCES **schema**.**prefix**_roles(role_id),
    CONSTRAINT cli_users_ibfk_4 FOREIGN KEY(designation_id) REFERENCES **schema**.**prefix**_designations(designation_id),
    CONSTRAINT cli_users_ibfk_5 FOREIGN KEY(country_id) REFERENCES eradcare.erc_countries(country_id),
    CONSTRAINT cli_users_ibfk_6 FOREIGN KEY(state_id) REFERENCES eradcare.erc_states(state_id),
    CONSTRAINT cli_users_ibfk_7 FOREIGN KEY(city_id) REFERENCES eradcare.erc_cities(city_id)
);
ALTER TABLE **schema**.**prefix**_users OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_usersettings (
    setting_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    themeStyle  CHARACTER VARYING(200) NOT NULL ,
    navStyle  CHARACTER VARYING(200) NOT NULL ,
    layout CHARACTER VARYING(200) NOT NULL,
    user_id uuid NOT NULL,
    CONSTRAINT cli_sub_tax_details_ibfk_1 FOREIGN KEY(user_id) REFERENCES **schema**.**prefix**_users(user_id)

);
ALTER TABLE **schema**.**prefix**_usersettings OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_privilege (
    privilege_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    pages_id CHARACTER VARYING(200) NOT NULL,   
	create_record boolean NOT NULL,
    update_record boolean NOT NULL,
    delete_record boolean NOT NULL,
    view_record boolean NOT NULL,
	role_id uuid NOT NULL,
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_privileges_ibfk_1 FOREIGN KEY(role_id) REFERENCES **schema**.**prefix**_roles(role_id)
);
ALTER TABLE **schema**.**prefix**_privilege OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_protocols (
    qa_protocol_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_protocol_name CHARACTER VARYING(200) NOT NULL,
    procedure_column_document_path CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_protocols OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_types (
    equipment_type_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    department_id uuid NOT NULL,
    qa_protocol_id uuid NOT NULL,
    equipment_type_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_types_ibfk_1 FOREIGN KEY(department_id) REFERENCES eradcare.erc_departments(department_id),
    CONSTRAINT cli_equipment_types_ibfk_2 FOREIGN KEY(qa_protocol_id) REFERENCES **schema**.**prefix**_qa_protocols(qa_protocol_id)
);
ALTER TABLE **schema**.**prefix**_equipment_types OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_makes (
    equipment_make_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_make_name CHARACTER VARYING(200) NOT NULL,
    contact_email CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_equipment_makes OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_models (
    equipment_model_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_make_id uuid NOT NULL,
    equipment_model_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_models_ibfk_1 FOREIGN KEY(equipment_make_id) REFERENCES **schema**.**prefix**_equipment_makes(equipment_make_id)
);
ALTER TABLE **schema**.**prefix**_equipment_models OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_photon_ff (
    photon_ff_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_type_id uuid NOT NULL,
    energy INTEGER NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_photon_ff_ibfk_1 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
);
ALTER TABLE **schema**.**prefix**_photon_ff OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_photon_fff (
    photon_fff_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_type_id uuid NOT NULL,
    energy INTEGER NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_photon_fff_ibfk_1 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
);
ALTER TABLE **schema**.**prefix**_photon_fff OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_electrons (
    electron_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_type_id uuid NOT NULL,
    energy INTEGER NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_electrons_ibfk_1 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
);
ALTER TABLE **schema**.**prefix**_electrons OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_brachy_sources (
    brachy_source_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    brachy_source_name CHARACTER VARYING(200) NOT NULL,
    source_half_life REAL NOT NULL DEFAULT '0',
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_brachy_sources OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_treatment_types (
    treatment_type_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_type_id uuid NOT NULL,
    treatment_type_name CHARACTER VARYING(200) NOT NULL,
    treatment_time REAL NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_treatment_types_ibfk_1 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
);
ALTER TABLE **schema**.**prefix**_treatment_types OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipments (
    equipment_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    equipment_type_id uuid NOT NULL,
    equipment_make_id uuid NOT NULL,
    equipment_model_id uuid NOT NULL,
    equipment_name CHARACTER VARYING(200) NOT NULL,
    serial_number CHARACTER VARYING(200) DEFAULT NULL,
    photon_ff_ids TEXT DEFAULT NULL,
    photon_fff_ids TEXT DEFAULT NULL,
    electron_ids TEXT DEFAULT NULL,
    brachy_source_ids TEXT DEFAULT NULL,
    treatment_type_ids TEXT DEFAULT NULL,
    epid_type INTEGER NOT NULL DEFAULT '0',
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipments_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_equipments_ibfk_2 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id),
    CONSTRAINT cli_equipments_ibfk_3 FOREIGN KEY(equipment_make_id) REFERENCES **schema**.**prefix**_equipment_makes(equipment_make_id),
    CONSTRAINT cli_equipments_ibfk_4 FOREIGN KEY(equipment_model_id) REFERENCES **schema**.**prefix**_equipment_models(equipment_model_id)
);
ALTER TABLE **schema**.**prefix**_equipments OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_licences (
    equipment_licence_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    equipment_id uuid NOT NULL,
    license_type SMALLINT NOT NULL DEFAULT '0',
    valid_from TIMESTAMPTZ NOT NULL,
    valid_to TIMESTAMPTZ NOT NULL,
    document_path CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_licences_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_equipment_licences_ibfk_2 FOREIGN KEY(equipment_id) REFERENCES **schema**.**prefix**_equipments(equipment_id)
);
ALTER TABLE **schema**.**prefix**_equipment_licences OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_service_engineers (
    equipment_service_engineer_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    equipment_ids TEXT DEFAULT NULL,
    service_engineer_name CHARACTER VARYING(200) NOT NULL,
    email CHARACTER VARYING(200) NOT NULL,
    phone CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_service_engineers_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id)
);
ALTER TABLE **schema**.**prefix**_equipment_service_engineers OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_amc (
   
    equipment_amc_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    equipment_id uuid NOT NULL,
    amc_type SMALLINT NOT NULL,
    valid_from TIMESTAMPTZ ,
    valid_to TIMESTAMPTZ ,
    document_path TEXT,
    amcperiod_name  CHARACTER VARYING(200) NOT NULL,
    service_engineer_ids text , 
    status SMALLINT NOT NULL DEFAULT '1',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_amc_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_equipment_amc_ibfk_2 FOREIGN KEY(equipment_id) REFERENCES **schema**.**prefix**_equipments(equipment_id)
);
ALTER TABLE **schema**.**prefix**_equipment_amc OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_pms (
    equipment_pms_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_amc_id uuid NOT NULL,
    hospital_id uuid NOT NULL,
    equipment_service_engineer_id uuid NOT NULL,
    schedule_date TIMESTAMPTZ NOT NULL,
    completed_date TIMESTAMPTZ ,
    document_path TEXT NULL,
    comments TEXT DEFAULT NULL,
    service_engineer_ids text  NULL, 
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_amc_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_equipment_amc_ibfk_2 FOREIGN KEY(equipment_amc_id) REFERENCES **schema**.**prefix**_equipment_amc(equipment_amc_id)      

);
ALTER TABLE **schema**.**prefix**_equipment_pms OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_oee (
    equipment_oee_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    equipment_id uuid NOT NULL,
    hospital_operational_hours_weekday REAL NOT NULL,
    hospital_operational_hours_saturday REAL NOT NULL,
    hospital_operational_hours_sunday REAL NOT NULL,
    hospital_holiday_applicable SMALLINT NOT NULL DEFAULT '0',
    vendor_operational_hours_weekday REAL NOT NULL,
    vendor_operational_hours_saturday REAL NOT NULL,
    vendor_operational_hours_sunday REAL NOT NULL,
    vendor_holiday_applicable SMALLINT NOT NULL DEFAULT '0',
    vendor_operational_start_time REAL NOT NULL,
    vendor_operational_end_time REAL NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_oee_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_equipment_oee_ibfk_2 FOREIGN KEY(equipment_id) REFERENCES **schema**.**prefix**_equipments(equipment_id)
);
ALTER TABLE **schema**.**prefix**_equipment_oee OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_errors (
    equipment_error_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_make_id uuid NOT NULL,
    equipment_model_id uuid NOT NULL,
    equipment_error_name CHARACTER VARYING(200) NOT NULL,
    code CHARACTER VARYING(200) NOT NULL,
    description TEXT DEFAULT NULL,
    solutions TEXT DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_errors_ibfk_1 FOREIGN KEY(equipment_make_id) REFERENCES **schema**.**prefix**_equipment_makes(equipment_make_id),
    CONSTRAINT cli_equipment_errors_ibfk_2 FOREIGN KEY(equipment_model_id) REFERENCES **schema**.**prefix**_equipment_models(equipment_model_id)
);
ALTER TABLE **schema**.**prefix**_equipment_errors OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_spare_parts (
    equipment_spare_part_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_make_id uuid NOT NULL,
    equipment_model_id uuid NOT NULL,
    equipment_spare_part_name CHARACTER VARYING(200) NOT NULL,
    currency CHARACTER VARYING(200) DEFAULT NULL,
    price REAL NOT NULL DEFAULT '0.00',
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_spare_parts_ibfk_1 FOREIGN KEY(equipment_make_id) REFERENCES **schema**.**prefix**_equipment_makes(equipment_make_id),
    CONSTRAINT cli_equipment_spare_parts_ibfk_2 FOREIGN KEY(equipment_model_id) REFERENCES **schema**.**prefix**_equipment_models(equipment_model_id)
);
ALTER TABLE **schema**.**prefix**_equipment_spare_parts OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_breakdowns (
    equipment_breakdown_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_id uuid NOT NULL,
    equipment_service_engineer_id uuid NOT NULL,
    token_no CHARACTER VARYING(200) NOT NULL,
    vendor_token_no CHARACTER VARYING(200) DEFAULT NULL,
    equipment_error_ids text DEFAULT NULL,
    breakdown_type SMALLINT NOT NULL DEFAULT '0',
    breakdown_open_time TIMESTAMPTZ NOT NULL,
    breakdown_open_description TEXT DEFAULT NULL,
    breakdown_close_time TIMESTAMPTZ NOT NULL,
    breakdown_close_description TEXT DEFAULT NULL,
    equipment_spare_part_ids text DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_breakdowns_ibfk_1 FOREIGN KEY(equipment_id) REFERENCES **schema**.**prefix**_equipments(equipment_id),
    CONSTRAINT cli_equipment_breakdowns_ibfk_2 FOREIGN KEY(equipment_service_engineer_id) REFERENCES **schema**.**prefix**_equipment_service_engineers(equipment_service_engineer_id)
);
ALTER TABLE **schema**.**prefix**_equipment_breakdowns OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_equipment_breakdown_history (
    equipment_breakdown_history_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_breakdown_id uuid NOT NULL,
    track_time TIMESTAMPTZ NOT NULL,
    track_description TEXT DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_equipment_breakdown_history_ibfk_1 FOREIGN KEY(equipment_breakdown_id) REFERENCES **schema**.**prefix**_equipment_breakdowns(equipment_breakdown_id)
);
ALTER TABLE **schema**.**prefix**_equipment_breakdown_history OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_xml_tags (
    xml_tag_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    xml_tag_name CHARACTER VARYING(200),
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_xml_tags OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_array_detectors (
    array_detector_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_type_id uuid NOT NULL,
    array_detector_name CHARACTER VARYING(200) NOT NULL,
    xml_tag_ids text NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_array_detectors_ibfk_1 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
     
);
ALTER TABLE **schema**.**prefix**_array_detectors OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_base_values (
    base_value_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    equipment_type_id uuid NOT NULL,
    energy_type_id uuid NOT NULL,
    energy_id uuid NOT NULL,
    dmax CHARACTER VARYING(200) DEFAULT NULL,
    oc_correction_factor REAL NOT NULL,
    oc_base_value REAL NOT NULL,
    qi_base_value REAL NOT NULL,
    oar_ip_base_value REAL NOT NULL,
    oar_cp_base_value REAL NOT NULL,
    ion_pdd_file_path CHARACTER VARYING(200) DEFAULT NULL,
    ion_profile_path CHARACTER VARYING(200) DEFAULT NULL,
    epid_pdd_file_path CHARACTER VARYING(200) DEFAULT NULL,
    epid_profile_path CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_base_values_ibfk_1 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
);
ALTER TABLE **schema**.**prefix**_base_values OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_qa_tool_makes (
    qa_tool_make_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_tool_make_name CHARACTER VARYING(200),
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_tool_makes OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_models (
    qa_tool_model_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_tool_make_id uuid NOT NULL,
    qa_tool_model_name CHARACTER VARYING(200) NOT NULL,
    dosimetry_type CHARACTER VARYING(200) NOT NULL,
    calibration_validity INTEGER NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tool_models_ibfk_1 FOREIGN KEY(qa_tool_make_id) REFERENCES **schema**.**prefix**_qa_tool_makes(qa_tool_make_id)
);
ALTER TABLE **schema**.**prefix**_qa_tool_models OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tools (
    qa_tool_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    qa_tool_make_id uuid NOT NULL,
    qa_tool_model_id uuid NOT NULL,
    qa_tool_name CHARACTER VARYING(200) NOT NULL,
    serial_number CHARACTER VARYING(200) DEFAULT NULL,
    purchase_date DATE NOT NULL,
    appointment_status SMALLINT NOT NULL DEFAULT '0',
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tools_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_qa_tools_ibfk_2 FOREIGN KEY(qa_tool_make_id) REFERENCES **schema**.**prefix**_qa_tool_makes(qa_tool_make_id),
    CONSTRAINT cli_qa_tools_ibfk_3 FOREIGN KEY(qa_tool_model_id) REFERENCES **schema**.**prefix**_qa_tool_models(qa_tool_model_id)
);
ALTER TABLE **schema**.**prefix**_qa_tools OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_calibrations (
    qa_tool_calibration_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    qa_tool_id uuid NOT NULL,
    calibrated_on DATE NOT NULL,
    calibration_valid_till DATE NOT NULL,
    calibration_factor CHARACTER VARYING(200) NOT NULL,
    refrence_temprature REAL NOT NULL,
    refrence_pressure REAL NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tool_calibrations_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_qa_tool_calibrations_ibfk_2 FOREIGN KEY(qa_tool_id) REFERENCES **schema**.**prefix**_qa_tools(qa_tool_id)
);
ALTER TABLE **schema**.**prefix**_qa_tool_calibrations OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_errors (
    qa_tool_error_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_tool_make_id uuid NOT NULL,
    qa_tool_model_id uuid NOT NULL,
    qa_tool_error_name CHARACTER VARYING(200) NOT NULL,
    code CHARACTER VARYING(200) NOT NULL,
    description TEXT DEFAULT NULL,
    solutions TEXT DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tool_errors_ibfk_1 FOREIGN KEY(qa_tool_make_id) REFERENCES **schema**.**prefix**_qa_tool_makes(qa_tool_make_id),
    CONSTRAINT cli_qa_tool_errors_ibfk_2 FOREIGN KEY(qa_tool_model_id) REFERENCES **schema**.**prefix**_qa_tool_models(qa_tool_model_id)
);
ALTER TABLE **schema**.**prefix**_qa_tool_errors OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_spare_parts (
    qa_tool_spare_part_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_tool_make_id uuid NOT NULL,
    qa_tool_model_id uuid NOT NULL,
    qa_tool_spare_part_name CHARACTER VARYING(200) NOT NULL,
    currency CHARACTER VARYING(200) DEFAULT NULL,
    price REAL NOT NULL DEFAULT '0.00',
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tool_spare_parts_ibfk_1 FOREIGN KEY(qa_tool_make_id) REFERENCES **schema**.**prefix**_qa_tool_makes(qa_tool_make_id),
    CONSTRAINT cli_qa_tool_spare_parts_ibfk_2 FOREIGN KEY(qa_tool_model_id) REFERENCES **schema**.**prefix**_qa_tool_models(qa_tool_model_id)
);
ALTER TABLE **schema**.**prefix**_qa_tool_spare_parts OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_service_engineers (
    qa_tool_service_engineer_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    qa_tool_ids text DEFAULT NULL,
    service_engineer_name CHARACTER VARYING(200) NOT NULL,
    email CHARACTER VARYING(200) NOT NULL,
    phone CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tool_service_engineers_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id)
);
ALTER TABLE **schema**.**prefix**_equipment_service_engineers OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_breakdowns (
    qa_tool_breakdown_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_tool_id uuid NOT NULL,
    qa_tool_service_engineer_id uuid NOT NULL,
    token_no CHARACTER VARYING(200) NOT NULL,
    vendor_token_no CHARACTER VARYING(200) DEFAULT NULL,
    qa_tool_error_ids text DEFAULT NULL,
    breakdown_type SMALLINT NOT NULL DEFAULT '0',
    breakdown_open_time TIMESTAMPTZ NOT NULL,
    breakdown_open_description TEXT DEFAULT NULL,
    breakdown_close_time TIMESTAMPTZ NOT NULL,
    breakdown_close_description TEXT DEFAULT NULL,
    qa_tool_spare_part_ids text DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_tool_breakdowns_ibfk_1 FOREIGN KEY(qa_tool_id) REFERENCES **schema**.**prefix**_qa_tools(qa_tool_id),
    CONSTRAINT cli_qa_tool_breakdowns_ibfk_2 FOREIGN KEY(qa_tool_service_engineer_id) REFERENCES **schema**.**prefix**_qa_tool_service_engineers(qa_tool_service_engineer_id)
);
ALTER TABLE **schema**.**prefix**_qa_tool_breakdowns OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_tool_breakdown_history (
    qa_tool_breakdown_history_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_tool_breakdown_id INTEGER NOT NULL,
    track_time TIMESTAMPTZ NOT NULL,
    track_description TEXT DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_tool_breakdown_history OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_qa_linac_ic_oc (
    qa_linac_ic_oc_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_type_id uuid NOT NULL,
    qa_id uuid NOT NULL,
    pressure uuid NOT NULL,
    temperature REAL NOT NULL,
    oc_photon_ff_mode CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_ff_energy CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_ff_correction_factor CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_ff_meter_reading CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_ff_output CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_ff_baseline CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_ff_variation CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_mode CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_energy CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_correction_factor CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_meter_reading CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_output CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_baseline CHARACTER VARYING(200) DEFAULT NULL,
    oc_photon_fff_variation CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_mode CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_energy CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_correction_factor CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_meter_reading CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_output CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_baseline CHARACTER VARYING(200) DEFAULT NULL,
    oc_electron_variation CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_linac_ic_oc OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_linac_ic_qi (
    qa_linac_ic_qi_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_type_id uuid NOT NULL,
    qa_id uuid NOT NULL,
    qi_photon_ff_mode CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_ff_energy CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_ff_meter_reading10 CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_ff_meter_reading20 CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_ff_average CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_ff_baseline CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_ff_variation CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_mode CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_energy CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_meter_reading10 CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_meter_reading20 CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_average CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_baseline CHARACTER VARYING(200) DEFAULT NULL,
    qi_photon_fff_variation CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_linac_ic_qi OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_linac_ic_oar (
    qa_linac_ic_oar_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_type_id uuid NOT NULL,
    qa_id uuid NOT NULL,
    oar_photo_ff_mode CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_energy CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_ip_mr_minus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_ip_mr_equal CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_ip_mr_plus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_ip_measured CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_ip_base_value CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_ip_variation CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_cp_mr_minus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_cp_mr_equal CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_cp_mr_plus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_cp_measured CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_cp_base_value CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_ff_cp_variation CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_mode CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_energy CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_ip_mr_minus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_ip_mr_equal CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_ip_mr_plus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_ip_measured CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_ip_base_value CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_ip_variation CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_cp_mr_minus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_cp_mr_equal CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_cp_mr_plus CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_cp_measured CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_cp_base_value CHARACTER VARYING(200) DEFAULT NULL,
    oar_photo_fff_cp_variation CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_linac_ic_oar OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_patient_forms (
    patient_form_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_form_name CHARACTER VARYING(200) NOT NULL unique,
    patient_form_link CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_patient_forms OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_forms (
    qa_form_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_form_name CHARACTER VARYING(200) NOT NULL unique,
    qa_form_link CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_qa_forms OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_patient_procedure_categories (
    patient_procedure_category_id uuid  NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    procedure_input_type INTEGER,
    patient_form_id uuid  NULL,
    patient_procedure_category_name CHARACTER VARYING(200) NOT NULL UNIQUE,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_patient_procedure_categories_ibfk_1 FOREIGN KEY(patient_form_id) REFERENCES **schema**.**prefix**_patient_forms(patient_form_id)
);
ALTER TABLE **schema**.**prefix**_patient_procedure_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_procedure_categories (
    qa_procedure_category_id uuid  NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_input_type INTEGER,
    qa_form_id uuid  NULL,
    qa_procedure_category_name CHARACTER VARYING(200) NOT NULL UNIQUE,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_procedure_categories_ibfk_1 FOREIGN KEY(qa_form_id) REFERENCES **schema**.**prefix**_qa_forms(qa_form_id)
);
ALTER TABLE **schema**.**prefix**_qa_procedure_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_patient_procedure_sub_categories (
    patient_procedure_sub_category_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_procedure_category_id uuid NOT NULL ,
    patient_procedure_sub_category_name CHARACTER VARYING(200) NOT NULL UNIQUE,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_patient_procedure_sub_categories_ibfk_1 FOREIGN KEY(patient_procedure_category_id) REFERENCES **schema**.**prefix**_patient_procedure_categories(patient_procedure_category_id)
);
ALTER TABLE **schema**.**prefix**_patient_procedure_sub_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_procedure_sub_categories (
    qa_procedure_sub_category_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_procedure_category_id uuid NOT NULL ,
    qa_procedure_sub_category_name CHARACTER VARYING(200) NOT NULL UNIQUE,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_procedure_sub_categories_ibfk_1 FOREIGN KEY(qa_procedure_category_id) REFERENCES **schema**.**prefix**_qa_procedure_categories(qa_procedure_category_id)
);
ALTER TABLE **schema**.**prefix**_qa_procedure_sub_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_unit_categories
(
    unit_category_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    unit_category_name character varying(200) NOT NULL,
    quantity character varying(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '1',
    created_on TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP   
);
ALTER TABLE **schema**.**prefix**_unit_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_unit_categories
(
    qa_unit_category_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_unit_category_name character varying(200) NOT NULL,
    qa_quantity character varying(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '1',
    created_on TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP   
);
ALTER TABLE **schema**.**prefix**_qa_unit_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_patient_procedures (
    patient_procedure_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_procedure_category_id uuid NOT NULL,
    patient_procedure_sub_category_id uuid NOT NULL,    
    procedure_name CHARACTER VARYING(200) NOT NULL,
    mandotory SMALLINT NOT NULL DEFAULT '0',
    field_type INTEGER NOT NULL DEFAULT '0',
    input_type INTEGER NOT NULL DEFAULT '0',
    number_type INTEGER   NULL DEFAULT '0',
    select_type INTEGER   NULL DEFAULT '0',
    select_options TEXT DEFAULT NULL,
    validation SMALLINT  NULL DEFAULT '0',
    default_value CHARACTER VARYING(200) DEFAULT NULL,
    range_from CHARACTER VARYING(200) DEFAULT NULL,
    operator_from CHARACTER VARYING(200) DEFAULT NULL,
    range_to CHARACTER VARYING(200) DEFAULT NULL,
    operator_to CHARACTER VARYING(200) DEFAULT NULL,
    visible_status SMALLINT NOT NULL DEFAULT '0',
    master_data CHARACTER VARYING(200) DEFAULT NULL,
    show SMALLINT NOT NULL DEFAULT '0',
    unit_category_id uuid DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_patient_procedures_ibfk_1 FOREIGN KEY(patient_procedure_category_id) REFERENCES **schema**.**prefix**_patient_procedure_categories(patient_procedure_category_id),
    CONSTRAINT cli_patient_procedures_ibfk_2 FOREIGN KEY(patient_procedure_sub_category_id) REFERENCES **schema**.**prefix**_patient_procedure_sub_categories(patient_procedure_sub_category_id)
);
ALTER TABLE **schema**.**prefix**_patient_procedures OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_qa_types
(
    qa_type_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_type_name character varying(200) NOT NULL,   
    status SMALLINT NOT NULL DEFAULT '1',
    created_on TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP   
);
ALTER TABLE **schema**.**prefix**_qa_types OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_qa_procedures (
    qa_procedure_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_procedure_category_id uuid NOT NULL,
    qa_procedure_sub_category_id uuid NOT NULL,
    qa_protocol_id uuid NOT NULL,
    qa_type_id uuid NOT NULL,
    qa_access_permission TEXT NOT NULL,
    qa_input CHARACTER VARYING(200) NOT NULL ,       
    procedure_name CHARACTER VARYING(200) NOT NULL,
    mandotory SMALLINT NOT NULL DEFAULT '0',
    field_type INTEGER NOT NULL DEFAULT '0',
    qa_form_id uuid NULL ,
    input_type INTEGER NOT NULL DEFAULT '0',
    number_type INTEGER   NULL DEFAULT '0',
    select_type INTEGER   NULL DEFAULT '0',
    select_options TEXT DEFAULT NULL,
    validation SMALLINT  NULL DEFAULT '0',
    default_value CHARACTER VARYING(200) DEFAULT NULL,
    range_from CHARACTER VARYING(200) DEFAULT NULL,
    operator_from CHARACTER VARYING(200) DEFAULT NULL,
    range_to CHARACTER VARYING(200) DEFAULT NULL,
    operator_to CHARACTER VARYING(200) DEFAULT NULL,
    visible_status SMALLINT NOT NULL DEFAULT '0',
    master_data CHARACTER VARYING(200) DEFAULT NULL,
    show SMALLINT NOT NULL DEFAULT '0',
    qa_unit_category_id uuid DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_procedures_ibfk_1 FOREIGN KEY(qa_procedure_category_id) REFERENCES **schema**.**prefix**_qa_procedure_categories(qa_procedure_category_id),
    CONSTRAINT cli_qa_procedures_ibfk_2 FOREIGN KEY(qa_procedure_sub_category_id) REFERENCES **schema**.**prefix**_qa_procedure_sub_categories(qa_procedure_sub_category_id),
    CONSTRAINT cli_qa_procedures_ibfk_3 FOREIGN KEY(qa_protocol_id) REFERENCES **schema**.**prefix**_qa_protocols(qa_protocol_id),
    CONSTRAINT cli_qa_procedures_ibfk_4 FOREIGN KEY(qa_type_id) REFERENCES **schema**.**prefix**_qa_types(qa_type_id)


);
ALTER TABLE **schema**.**prefix**_qa_procedures OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_qa_procedure_fieldname (
    qa_procedure_fieldname_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_id uuid NOT NULL,
    equipment_id uuid NOT NULL,
    role_id uuid NOT NULL,
    qa_type_name text NOT NULL,
    qa_procedure_fieldname text NOT NULL,
    qa_procedure_fieldname_values text not null,    
    equipment_working_status CHARACTER VARYING(200) DEFAULT NULL,
    notworking_energy_ff CHARACTER VARYING(200) DEFAULT NULL,
    notworking_energy_fff CHARACTER VARYING(200) DEFAULT NULL,
    notworking_reason TEXT DEFAULT NULL,
    working_energy_electron CHARACTER VARYING(200) DEFAULT NULL,
    upload_screenshot CHARACTER VARYING(200) DEFAULT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_qa_daily_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_qa_daily_ibfk_2 FOREIGN KEY(equipment_id) REFERENCES **schema**.**prefix**_equipments(equipment_id),
    CONSTRAINT cli_qa_daily_ibfk_3 FOREIGN KEY(role_id) REFERENCES **schema**.**prefix**_roles(role_id)
);
ALTER TABLE **schema**.**prefix**_qa_procedure_fieldname OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_patient_service_categories (
    patient_service_category_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_service_category_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_patient_service_categories OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_patient_service_types (
    patient_service_type_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_service_category_id uuid NOT NULL,
    patient_service_type_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_patient_service_types_ibfk_1 FOREIGN KEY(patient_service_category_id) REFERENCES **schema**.**prefix**_patient_service_categories(patient_service_category_id)
);
ALTER TABLE **schema**.**prefix**_patient_service_types OWNER TO postgres;
 

CREATE TABLE **schema**.**prefix**_patient_services (
    patient_service_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_service_category_id uuid NOT NULL,
    patient_service_type_id uuid NOT NULL,
    department_id uuid NOT NULL,
    unit_category_id uuid NOT NULL,
    service_name CHARACTER VARYING(200) NOT NULL,
    service_code CHARACTER VARYING(200) DEFAULT NULL,
    long_description TEXT DEFAULT NULL,
    effective_date TIMESTAMPTZ NOT NULL,
    currency_type INTEGER NOT NULL DEFAULT '0',
    rate REAL NOT NULL DEFAULT '0',
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_patient_services_ibfk_1 FOREIGN KEY(patient_service_category_id) REFERENCES **schema**.**prefix**_patient_service_categories(patient_service_category_id),
    CONSTRAINT cli_patient_services_ibfk_2 FOREIGN KEY(patient_service_type_id) REFERENCES **schema**.**prefix**_patient_service_types(patient_service_type_id),
    CONSTRAINT cli_patient_services_ibfk_3 FOREIGN KEY(department_id) REFERENCES eradcare.erc_departments(department_id),
    CONSTRAINT cli_patient_services_ibfk_4 FOREIGN KEY(unit_category_id) REFERENCES **schema**.**prefix**_unit_categories(unit_category_id)
);
ALTER TABLE **schema**.**prefix**_patient_services OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_packages (
    package_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    department_id uuid NOT NULL,
    service_ids TEXT NOT NULL,
    package_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_packages_ibfk_1 FOREIGN KEY(department_id) REFERENCES eradcare.erc_departments(department_id)
);
ALTER TABLE **schema**.**prefix**_packages OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_insurance_companies (
    insurance_company_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    insurance_company_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_insurance_companies OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_insurance_company_details (
    insurance_company_detail_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    insurance_company_id uuid NOT NULL,
    country_id int NOT NULL,
    state_id int NOT NULL,
    city_id int NOT NULL,
    address TEXT DEFAULT NULL,
    pin_code CHARACTER VARYING(200) DEFAULT NULL,
    email_id CHARACTER VARYING(200) NOT NULL,
    phone_number CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_insurance_company_details_ibfk_1 FOREIGN KEY(insurance_company_id) REFERENCES **schema**.**prefix**_insurance_companies(insurance_company_id),
    CONSTRAINT cli_insurance_company_details_ibfk_2 FOREIGN KEY(country_id) REFERENCES eradcare.erc_countries(country_id),
    CONSTRAINT cli_insurance_company_details_ibfk_3 FOREIGN KEY(state_id) REFERENCES eradcare.erc_states(state_id),
    CONSTRAINT cli_insurance_company_details_ibfk_4 FOREIGN KEY(city_id) REFERENCES eradcare.erc_cities(city_id)
);
ALTER TABLE **schema**.**prefix**_insurance_company_details OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_taxes (
    tax_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    tax_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE **schema**.**prefix**_taxes OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_tax_details (
    tax_detail_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    tax_id uuid NOT NULL,
    percentage REAL NOT NULL DEFAULT '0',
    effective_from TIMESTAMPTZ NOT NULL,
    effective_to TIMESTAMPTZ NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
     created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_tax_details_ibfk_1 FOREIGN KEY(tax_id) REFERENCES **schema**.**prefix**_taxes(tax_id)
);
ALTER TABLE **schema**.**prefix**_tax_details OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_sub_taxes (
    sub_tax_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    tax_id uuid NOT NULL,
    sub_tax_name CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '1',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_sub_taxes_ibfk_1 FOREIGN KEY(tax_id) REFERENCES **schema**.**prefix**_taxes(tax_id)
);
ALTER TABLE **schema**.**prefix**_sub_taxes OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_sub_tax_details (
    sub_tax_detail_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    sub_tax_id uuid NOT NULL,
    percentage REAL NOT NULL DEFAULT '0',
    effective_from TIMESTAMPTZ NOT NULL,
    effective_to TIMESTAMPTZ NOT NULL,
    status SMALLINT NOT NULL DEFAULT '0',
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT cli_sub_tax_details_ibfk_1 FOREIGN KEY(sub_tax_id) REFERENCES **schema**.**prefix**_sub_taxes(sub_tax_id)
);
ALTER TABLE **schema**.**prefix**_sub_tax_details OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_licsettings (

    licsetting_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    hospital_limit integer NOT NULL,
    module_ids text  NOT NULL,
    department_equipment_limit text NOT Null,
    license_to timestamp without time zone NOT NULL,
    hospital_type text NOT NULL
      
);
ALTER TABLE **schema**.**prefix**_licsettings OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_covid19details (
    covid19details_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    scan_date timestamp without time zone NOT NULL,
    total_slice integer NOT NULL,
    covid_result CHARACTER VARYING(200) NOT NULL,
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    patient_uhid CHARACTER VARYING(200) NOT NULL      
);
ALTER TABLE **schema**.**prefix**_covid19details OWNER TO postgres;

CREATE TABLE **schema**.**prefix**_covid19  (
    cpatient_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    cpatient_name CHARACTER VARYING(200) NOT NULL,
    created_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    patient_uhid CHARACTER VARYING(200) NOT NULL      
);
ALTER TABLE **schema**.**prefix**_covid19details OWNER TO postgres;


CREATE TABLE **schema**.**prefix**_dashboardconfig (
    dashboardconfig_id uuid NOT NULL DEFAULT uuid_generate_v4(),
	dashboardconfig_name text Not Null,
    dmenu_ids text  NOT NULL, 
	created_on timestamp without time zone NOT NULL DEFAULT now(),
    updated_on timestamp without time zone NOT NULL DEFAULT now(),
    status SMALLINT NOT NULL DEFAULT '1'	
);

ALTER TABLE **schema**.**prefix**_dashboardconfig OWNER TO postgres;

CREATE TABLE  **schema**.**prefix**_service_engineers (
    service_engineer_id uuid NOT NULL DEFAULT uuid_generate_v4(),  
    service_engineer_name CHARACTER VARYING(200) NOT NULL,
    email CHARACTER VARYING(200) NOT NULL,
    phone CHARACTER VARYING(200) NOT NULL,
    status SMALLINT NOT NULL DEFAULT '1',
    company_name character varying(200) NULL,
    created_on TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP    
);
ALTER TABLE **schema**.**prefix**_service_engineers OWNER TO postgres;

CREATE TABLE  **schema**.**prefix**_patient_procedures_order (
    procedure_order_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id uuid NOT NULL ,
    sub_category_order  jsonb,
    fields_order  jsonb,
    CONSTRAINT cli_patient_procedures_order_ibfk_1 FOREIGN KEY(category_id) REFERENCES **schema**.**prefix**_patient_procedure_categories(patient_procedure_category_id)
    
);
ALTER TABLE **schema**.**prefix**_patient_procedures_order OWNER TO postgres;

CREATE TABLE  **schema**.**prefix**_qa_procedures_order (
    qa_procedure_order_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    qa_category_id uuid NOT NULL ,
    qa_sub_category_order  jsonb,
    fields_order  jsonb,
    CONSTRAINT cli_qa_procedures_order_ibfk_1 FOREIGN KEY(qa_category_id) REFERENCES **schema**.**prefix**_qa_procedure_categories(qa_procedure_category_id)
    
);
ALTER TABLE  **schema**.**prefix**_qa_procedures_order OWNER TO postgres;

CREATE TABLE  **schema**.**prefix**_starshot(
    startshot_id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    date DATE NOT NULL,
    test_on CHARACTER VARYING(200)  NULL,
    SID SMALLINT NOT NULL,
    dip SMALLINT NOT NULL,
    filepath CHARACTER VARYING(200)  NULL,
    filename CHARACTER VARYING(200)  NULL,
    result CHARACTER VARYING(200)  NULL,
    hospital_id uuid NOT NULL,
    equipment_type_id uuid NOT NULL,
    created_on TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,   

    CONSTRAINT cli_startshot_ibfk_1 FOREIGN KEY(hospital_id) REFERENCES **schema**.**prefix**_hospitals(hospital_id),
    CONSTRAINT cli_startshot_ibfk_2 FOREIGN KEY(equipment_type_id) REFERENCES **schema**.**prefix**_equipment_types(equipment_type_id)
);
ALTER TABLE **schema**.**prefix**_starshot OWNER TO postgres;
