CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

DELETE FROM **schema**.**prefix**_qa_tool_models;
DELETE FROM **schema**.**prefix**_qa_tool_makes;
DELETE FROM **schema**.**prefix**_photon_ff;
DELETE FROM **schema**.**prefix**_photon_fff;
DELETE FROM **schema**.**prefix**_electrons;
DELETE FROM **schema**.**prefix**_treatment_types;
DELETE FROM **schema**.**prefix**_equipment_types;
DELETE FROM **schema**.**prefix**_qa_protocols;


INSERT INTO **schema**.**prefix**_qa_protocols(qa_protocol_id, qa_protocol_name, status, created_on,updated_on) VALUES
(uuid_generate_v4(), 'AAPM TG40', 1, '**today**','**today**'),
(uuid_generate_v4(), 'AAPM TG135', 1, '**today**','**today**'),
(uuid_generate_v4(), 'AAPM TG148', 1, '**today**','**today**'),
(uuid_generate_v4(), 'AAPM TG12', 1, '**today**','**today**');

 
SELECT deptprotocols('Radiotherapy','AAPM TG40','Medical Linear Acclerator','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiotherapy','AAPM TG40','Brachytherapy','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiotherapy','AAPM TG40','LINAC TPS' ,'**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiotherapy','AAPM TG135','Cyberknife','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types'); 
SELECT deptprotocols('Radiotherapy','AAPM TG148','Tomotherapy','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Fixed X-ray','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Mobile X-ray','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','C-Arm','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Mammography','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Bone Densitometer','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Dental Intra Oral','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Dental [HAND]','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','Cathlab','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Radiology','AAPM TG12','CT','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','PET CT','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','SPECT CT','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','High Dose Therapy','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','Cyclotron','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','PET-MR','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','SPECT','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');
SELECT deptprotocols('Nuclear Medicine','AAPM TG12','Cyclotron','**schema**.**prefix**_qa_protocols','**schema**.**prefix**_equipment_types');

DELETE FROM **schema**.**prefix**_equipment_models;
DELETE FROM **schema**.**prefix**_equipment_makes;

INSERT INTO **schema**.**prefix**_equipment_makes
    (equipment_make_id, equipment_make_name, contact_email, status, created_on, updated_on)
VALUES
    (uuid_generate_v4(), 'Varian', ' ', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'Siemens Healthineers', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Accuray', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Elekta', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Eckert and Ziegler BEBIG GmbH',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'MEDILUX SYSTEMS', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Allengers Medical Systems Limited', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'KIRAN MEDICAL SYSTEMS (A DIVISION OF TRIVITRON HEALTHCARE PVT. LTD.)',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'General Medical Merate SPA',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE Hualun Medical Systems Co.Ltd.',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE Medical Systems LLC',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Wipro GE Healthcare Private Limited', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE OEC Medical Systems',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE Medical Systems S.C.S',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE Medical Systems Lunar',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'L accessorio nucleare S.r.l', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Aditya Medical Systems',' ', 1,'**today**', '**today**'),
    (uuid_generate_v4(), 'DEXCOWINCO LTD', ' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Allans Medical Systems',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'VATECH Co.Ltd',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE Healthcare',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Philips',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'GE',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Mediso Ltd.',' ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'DDD-DIAGNOSTIC',' ', 1, '**today**', '**today**');
	


SELECT eq_model('Varian','TrueBeam STx (without FFF mode)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','TrueBeam (without FFF mode)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Clinac 2100C','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Clinac DBX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Novalis Tx','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Vital Beam with FFF','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Varian','TrueBeam STx (with FFF mode)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Varian','TrueBeam SVC with FFF','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Clinac 6EX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Halcyon','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian', 'Clinac iX with FFF','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Unique Power','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Varian','Clinac iX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Clinac 2300C/D','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Trilogy Tx','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Alcyon-II','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','VariSource ID','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Varian','Gamma Med Plus','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Gamma Med Plus iX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','VariSource iX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','VariSource 200','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Gamma Med Plus 3/24 iX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Varian','Gamma Med Plus 3/24','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Siemens Healthineers','Oncor Impression Plus','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers', 'Primus 6 ST','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Siemens Healthineers','Primus Essential (P&E)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers','Primus Plus','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers', 'Primus','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers','SOMATOM Confidence','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers','Somatom Definition AS 64 Open(CT Simulator)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers','Biograph Vision 450 Edge','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers','Biograpgh mMR','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Siemens Healthineers', 'Symbia T16','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Accuray','Radixact X9','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Accuray','TomoH','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Accuray','CyberKnife G4','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Accuray','Cyberknife VSI','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Accuray','Hi ART System','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta', 'Versa HD','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Compact','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Infinity','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Synergy S','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta', 'Elekta Unity','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','MicroSelectron HDR V3 (18 channel)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Micro Selectron HDR Model 105.998','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Micro Selectron HDR 080.000','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','MicroSelectron Genie','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','MicroSelectron HDR V3','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Micro Selectron HDR-TCS 080.000/096.080','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Micro Selectron HDR','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Elekta','Flexitron Co-60','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');
SELECT eq_model('Eckert and Ziegler BEBIG GmbH','Gynesource','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Eckert and Ziegler BEBIG GmbH','Multisource','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Eckert and Ziegler BEBIG GmbH','Multisource HDR Remote after loading system','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Eckert and Ziegler BEBIG GmbH','SagiNova','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('MEDILUX SYSTEMS','Medilux-300','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Allengers Medical Systems Limited','MARS-30','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Allengers Medical Systems Limited', 'Allengers 60DX','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Allengers Medical Systems Limited','MARS 32 DR','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Allengers Medical Systems Limited','MARS- 2.5','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Allengers Medical Systems Limited','HF-49R','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('KIRAN MEDICAL SYSTEMS (A DIVISION OF TRIVITRON HEALTHCARE PVT. LTD.)','Ultisys-82','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('General Medical Merate SPA','ProRad CALYPSO-I','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('GE Hualun Medical Systems Co.Ltd.','Optima XR646','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('GE Medical Systems LLC','Optima XR240amx','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model('Wipro GE Healthcare Private Limited','Genius-60','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model( 'GE OEC Medical Systems','OEC 9800','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');  
SELECT eq_model( 'GE Medical Systems S.C.S', 'Senograph DS','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');    
SELECT eq_model( 'GE Medical Systems Lunar', 'Lunar DPX Series','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');  
SELECT eq_model( 'L accessorio nucleare S.r.l', 'Unigamma M','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');  
SELECT eq_model( 'Aditya Medical Systems', 'AMS-6010E','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');     
SELECT eq_model(  'DEXCOWINCO LTD',  'DX3000','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');    
SELECT eq_model( 'Allans Medical Systems','AX-1070D','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');   
SELECT eq_model( 'VATECH Co.Ltd','VEX-P250','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');   
SELECT eq_model( 'GE Healthcare','Innova 4100IQ','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');   
SELECT eq_model( 'Philips','GEMINI Gxl','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');  
SELECT eq_model( 'GE','Discovery PET/CT 710-128Slices','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');    
SELECT eq_model( 'GE', 'SIGNA PET/MR','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');   
SELECT eq_model( 'GE','Optima NMCT 640','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');  
SELECT eq_model( 'GE','PETtrace 880','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model( 'Mediso Ltd.','AnyScan S (SPECT Single Head)','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models'); 
SELECT eq_model( 'DDD-DIAGNOSTIC','QuantumCam','**schema**.**prefix**_equipment_makes','**schema**.**prefix**_equipment_models');



SELECT eq_ttype('Cyberknife','CK Xsight Tracking','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Skull Tracking','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Fiducial','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Fiducial Syn','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','Conventional','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','IMRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','3DCRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','Rapid ARC','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','VMAT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','IGRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','LINAC-SRS','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','LINAC-SBRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Medical Linear Acclerator','LINAC-SRS','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Xsight Tracking','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Skull Tracking','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Fiducial','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Cyberknife','CK Fiducial Syn','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Tomotherapy','TOMO-IGRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Tomotherapy','TOMO-3DCRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Tomotherapy','TOMO-SRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');
SELECT eq_ttype('Tomotherapy','TOMO-SBRT','**schema**.**prefix**_equipment_types','**schema**.**prefix**_treatment_types');



INSERT INTO **schema**.**prefix**_qa_tool_makes
    (qa_tool_make_id, qa_tool_make_name, status, created_on,updated_on)
VALUES
    (uuid_generate_v4(), 'IBA', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'PTW', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'SI', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Fluke', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Lutron', 1, '**today**','**today**');

SELECT qa_models('IBA','FC65-G','Beam Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('IBA','PPC05 For Electron','Beam Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('IBA','DOSE 1','Beam Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('IBA','Blue Phantom 3D','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('IBA','30x30 Water Phantom','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('IBA','Slab Phantom for Electron','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('IBA','MATRIXX Evolution','Patients Specific QA','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('PTW','OCTAVIUS 729','Patients Specific QA','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('PTW','MP3','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('PTW','SLAB PHANTOM FOR ELECTRON QA','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('PTW','20/10 PHANTOM','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('PTW','Water Phantom','Releative Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');
SELECT qa_models('PTW','ROOS Chamber','Beam Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models'); 
SELECT qa_models('PTW','Farmer Chamber','Beam Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models'); 
SELECT qa_models('PTW','UNIDOS E','Beam Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models'); 
SELECT qa_models('PTW','451P-DE-SI-RYR','Protection Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models'); 
SELECT qa_models('PTW','MHB-382SD','Protection Level Dosimetry','**schema**.**prefix**_qa_tool_makes','**schema**.**prefix**_qa_tool_models');  

SELECT Energy_FF('Medical Linear Acclerator',4,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_ff');
SELECT Energy_FF('Medical Linear Acclerator',6,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_ff');
SELECT Energy_FF('Medical Linear Acclerator',10,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_ff');
SELECT Energy_FF('Medical Linear Acclerator',15,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_ff');

SELECT Energy_FFF('Medical Linear Acclerator',6,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_fff');
SELECT Energy_FFF('Medical Linear Acclerator',10,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_fff');
SELECT Energy_FFF('Cyberknife',6,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_fff');
SELECT Energy_FFF('Tomotherapy',6,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_photon_fff');

SELECT Eletron_energy('Medical Linear Acclerator',6,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',7,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',8,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',9,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',10,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',12,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',14,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',15,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',18,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');
SELECT Eletron_energy('Medical Linear Acclerator',21,'**schema**.**prefix**_equipment_types','**schema**.**prefix**_electrons');

DELETE FROM **schema**.**prefix**_brachy_sources;
INSERT INTO  **schema**.**prefix**_brachy_sources
    (brachy_source_id, brachy_source_name, source_half_life, status, created_on,updated_on)
VALUES
    (uuid_generate_v4(), 'Co-60', 1898, 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Ir-192', 74, 1,'**today**', '**today**');

DELETE FROM **schema**.**prefix**_designations;
DELETE FROM **schema**.**prefix**_roles; 
DELETE FROM **schema**.**prefix**_privilege;

INSERT INTO **schema**.**prefix**_roles
    (role_id, role_name, status, created_on,updated_on)
VALUES
    (uuid_generate_v4(), 'Reviewer', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Administrator', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Power User', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Physician', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Physicist', 1, '**today**','**today**'),
    (uuid_generate_v4(), 'Technologist', 1, '**today**','**today**');
  

SELECT Role_privilage('Reviewer','RolesPrivilege',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','RolesPrivilege',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','RolesPrivilege',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','RolesPrivilege',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','RolesPrivilege',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','RolesPrivilege',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Designation',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Designation',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Designation',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Designation',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Designation',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Designation',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','Dashboard Config',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Dashboard Config',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Dashboard Config',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Dashboard Config',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Dashboard Config',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Dashboard Config',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','EquipmentMake',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','EquipmentMake',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','EquipmentMake',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','EquipmentMake',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','EquipmentMake',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','EquipmentMake',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Brachytherapy Source',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Brachytherapy Source',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Brachytherapy Source',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Brachytherapy Source',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Brachytherapy Source',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Brachytherapy Source',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Equipment Registration',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Equipment Registration',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Equipment Registration',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Equipment Registration',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Equipment Registration',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Equipment Registration',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Hospital Registration',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Hospital Registration',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Hospital Registration',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Hospital Registration',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Hospital Registration',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Hospital Registration',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','QAProtocol',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QAProtocol',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QAProtocol',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QAProtocol',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QAProtocol',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QAProtocol',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','Service Engineer Details',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Service Engineer Details',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Service Engineer Details',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Service Engineer Details',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Service Engineer Details',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Service Engineer Details',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','Equipment Type',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Equipment Type',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Equipment Type',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Equipment Type',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Equipment Type',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Equipment Type',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Equipment License',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Equipment License',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Equipment License',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Equipment License',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Equipment License',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Equipment License',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Equipment Annual Maintenance Contract',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Equipment Annual Maintenance Contract',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Equipment Annual Maintenance Contract',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Equipment Annual Maintenance Contract',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Equipment Annual Maintenance Contract',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Equipment Annual Maintenance Contract',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Electron Energy',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Electron Energy',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Electron Energy',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Electron Energy',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Electron Energy',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Electron Energy',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','TreatmentType',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','TreatmentType',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','TreatmentType',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','TreatmentType',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','TreatmentType',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','TreatmentType',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','Photon Energy FF',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Photon Energy FF',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Photon Energy FF',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Photon Energy FF',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Photon Energy FF',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Photon Energy FF',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','Photon Energy FFF',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','Photon Energy FFF',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','Photon Energy FFF',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','Photon Energy FFF',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','Photon Energy FFF',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','Photon Energy FFF',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','EquipmentModel',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','EquipmentModel',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','EquipmentModel',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','EquipmentModel',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','EquipmentModel',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','EquipmentModel',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','P_FormInputMaster',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','P_FormInputMaster',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','P_FormInputMaster',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','P_FormInputMaster',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','P_FormInputMaster',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','P_FormInputMaster',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','P_Category',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','P_Category',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','P_Category',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','P_Category',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','P_Category',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','P_Category',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','P_SubCategory',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','P_SubCategory',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','P_SubCategory',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','P_SubCategory',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','P_SubCategory',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','P_SubCategory',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');


SELECT Role_privilage('Reviewer','P_Unit',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','P_Unit',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','P_Unit',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','P_Unit',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','P_Unit',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','P_Unit',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','P_Procedure',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','P_Procedure',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','P_Procedure',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','P_Procedure',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','P_Procedure',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','P_Procedure',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','QA_FormInputMaster',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QA_FormInputMaster',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QA_FormInputMaster',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QA_FormInputMaster',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QA_FormInputMaster',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QA_FormInputMaster',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','QA_Category',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QA_Category',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QA_Category',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QA_Category',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QA_Category',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QA_Category',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','QA_SubCategory',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QA_SubCategory',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QA_SubCategory',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QA_SubCategory',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QA_SubCategory',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QA_SubCategory',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','QA_Unit',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QA_Unit',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QA_Unit',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QA_Unit',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QA_Unit',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QA_Unit',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','QA_Procedure',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QA_Procedure',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QA_Procedure',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QA_Procedure',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QA_Procedure',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QA_Procedure',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');

SELECT Role_privilage('Reviewer','QA_Type',false,false,false,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Administrator','QA_Type',true,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Power User','QA_Type',false,true,true,true,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physician','QA_Type',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Physicist','QA_Type',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');
SELECT Role_privilage('Technologist','QA_Type',false,false,false,false,'**schema**.**prefix**_roles','eradcare.erc_pages','**schema**.**prefix**_privilege');




SELECT Role_desig('Reviewer','CEO','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Reviewer','CFO','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Reviewer','CIO','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Reviewer','COO','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Administrator','HR Manager','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Administrator', 'Director','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Power User', 'Head of the Department','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Power User', 'Chief Medical Physicist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Physician','Radiation Oncologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Physician','Radiologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Physician','Nuclear Medical physician','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Physicist','Sr. Medical Physicist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Physicist','Medical Physicist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Technologist','Sr.RT Technologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Technologist','RT Technologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Technologist', 'Sr.RD Technologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Technologist','RD Technologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Technologist','Sr. NM Technologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');
SELECT Role_desig('Technologist', 'NM Technologist','**schema**.**prefix**_roles','**schema**.**prefix**_designations');

DELETE FROM **schema**.**prefix**_qa_procedure_categories;

INSERT INTO  **schema**.**prefix**_qa_procedure_categories
    (qa_procedure_category_id, qa_procedure_category_name, status, created_on,updated_on)
VALUES
    (uuid_generate_v4(), 'Dosimetry', 1,'**today**', '**today**'),
    (uuid_generate_v4(), 'Mechanical', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Safety', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'MLC', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'Imaging', 1, '**today**', '**today**');

  
DELETE FROM  **schema**.**prefix**_xml_tags;
INSERT INTO  **schema**.**prefix**_xml_tags
    (xml_tag_id, xml_tag_name, status, created_on,updated_on)
VALUES
    (uuid_generate_v4(), 'PTW - CAX', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'PTW - Flatness', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'PTW - SymmetryGT', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'PTW - SymmetryLR ', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'PTW - BQF', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'PTW - Wedge ', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - Dose', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - AxSym', 1, '**today**', '**today**'),
    (uuid_generate_v4(), 'SN -TrSym', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - QAFlat', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - X-Energy', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - Xsize', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - Xshift', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - Ysize', 1,  '**today**', '**today**'),
    (uuid_generate_v4(), 'SN - Yshift', 1, '**today**', '**today**');
