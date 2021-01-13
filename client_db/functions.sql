------------------------------------
-- FUNCTION: Department protocals
-------------------------------------

CREATE OR REPLACE FUNCTION public.deptprotocols(  dept text, qa_protocal text , eq_type text ,id_schema text,rep_schema text) 

    RETURNS void
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
  DECLARE
     qa_uuid uuid;
     dept_uuid  uuid;
	
  BEGIN	 
       EXECUTE format ('SELECT department_id from eradcare.erc_departments where department_name = $1') using dept into dept_uuid;
	   EXECUTE format ('SELECT  qa_protocol_id from %s where  qa_protocol_name = $1', id_schema ) using qa_protocal into qa_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6,$7)',rep_schema) using  uuid_generate_v4(),  dept_uuid, qa_uuid, eq_type, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;

ALTER FUNCTION public.deptprotocols(  dept text, qa_protocal text , eq_type text ,id_schema text,rep_schema text)
    OWNER TO postgres;
	
-- ---------------------------	
-- FUNCTION: Equipment Modules 
------------------------------

CREATE OR REPLACE FUNCTION public.eq_model( em_name text, ename text,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT  equipment_make_id from %s where  equipment_make_name  = $1', id_schema ) using em_name into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6)',rep_schema) using  uuid_generate_v4(), em_uuid,  ename, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.eq_model( em_name text, ename text,id_schema text,rep_schema text) 
    OWNER TO postgres;
	
	
-- ---------------------------	
-- FUNCTION:  Treatement Types 
------------------------------

CREATE OR REPLACE FUNCTION public.eq_ttype(etype_name text, ttype text,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT   equipment_type_id from %s where equipment_type_name  = $1', id_schema ) using etype_name into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6,$7)',rep_schema) using uuid_generate_v4(), em_uuid,  ttype, 10, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.eq_ttype(etype_name text, ttype text,id_schema text,rep_schema text) 
    OWNER TO postgres;
	
-- ---------------------------	
-- FUNCTION:    QA models add
------------------------------

CREATE OR REPLACE FUNCTION public.qa_models( qam_id text, qamname text , dtype text,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT qa_tool_make_id from %s where qa_tool_make_name  = $1', id_schema ) using qam_id into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6,$7,$8)',rep_schema) using uuid_generate_v4(), em_uuid, qamname,dtype,365, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.qa_models( qam_id text, qamname text , dtype text,id_schema text,rep_schema text)  
    OWNER TO postgres;
	
-- ---------------------------	
-- FUNCTION:    Photon FF Energy
------------------------------

CREATE OR REPLACE FUNCTION public.Energy_FF( etype_name text, energy int,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT equipment_type_id from %s where equipment_type_name  = $1', id_schema ) using  etype_name into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6)',rep_schema) using uuid_generate_v4(), em_uuid,energy, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.Energy_FF( etype_name text, energy int,id_schema text,rep_schema text)
    OWNER TO postgres;
	
-- ------------------------------	
-- FUNCTION:    Photon FFF Energy
---------------------------------

CREATE OR REPLACE FUNCTION public.Energy_FFF( etype_name text, energy int,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT equipment_type_id from %s where equipment_type_name  = $1', id_schema ) using  etype_name into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6)',rep_schema) using uuid_generate_v4(), em_uuid,energy, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.Energy_FFF( etype_name text, energy int,id_schema text,rep_schema text)
    OWNER TO postgres;
	
-- ------------------------------	
-- FUNCTION:    Photon Eletron Energy
---------------------------------	
CREATE OR REPLACE FUNCTION public.Eletron_energy( etype_name text, energy int,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT equipment_type_id from %s where equipment_type_name  = $1', id_schema ) using  etype_name into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6)',rep_schema) using uuid_generate_v4(), em_uuid,energy, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.Eletron_energy( etype_name text, energy int,id_schema text,rep_schema text)
    OWNER TO postgres;
	
-- ----------------------------------	
-- FUNCTION:    Role and Desigination 
--------------------------------------	

CREATE OR REPLACE FUNCTION public.Role_desig(role_name text, desig_name text,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
       EXECUTE format ('SELECT role_id from %s where role_name  = $1', id_schema ) using   role_name  into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6)',rep_schema) using uuid_generate_v4(), em_uuid,desig_name, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.Role_desig(role_name text, desig_name text,id_schema text,rep_schema text)
    OWNER TO postgres;

-- ----------------------------------	
-- FUNCTION:    Role and Desigination 
--------------------------------------	

CREATE OR REPLACE FUNCTION public.Role_privilage( role_name text, page_name text,ca boolean,ua boolean,da boolean,va boolean ,id_schema text,idp_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
     page_uuid uuid;
  BEGIN	 
     EXECUTE format ('SELECT role_id from %s where role_name  = $1', id_schema ) using   role_name  into em_uuid;
     EXECUTE format ('SELECT pages_id from %s where pages_name  = $1', idp_schema ) using   page_name  into page_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)',rep_schema) using uuid_generate_v4(), page_uuid, ca,ua,da,va,em_uuid,LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;

ALTER FUNCTION public.Role_privilage(role_name text, page_name text,ca boolean,ua boolean,da boolean,va boolean ,id_schema text,idp_schema text,rep_schema text)
    OWNER TO postgres;
  
-- ----------------------------------	
-- FUNCTION:     QA and Procedure link
--------------------------------------	
CREATE OR REPLACE FUNCTION public.qa_pro(etype_name text, custom_qa text ,modal_form text,qa_in int, a_comment text,id_schema text,rep_schema text) 
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE     
AS $BODY$
  DECLARE
     em_uuid uuid;
  BEGIN	 
     EXECUTE format ('SELECT equipment_type_id from %s where equipment_type_name  = $1', id_schema ) using   etype_name  into em_uuid;
	   EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)',rep_schema) using uuid_generate_v4(), em_uuid, custom_qa, modal_form,qa_in , a_comment, 1, LOCALTIMESTAMP(2),LOCALTIMESTAMP(2);  
      END;
  $BODY$;
ALTER FUNCTION public.qa_pro(etype_name text, custom_qa text ,modal_form text,qa_in int, a_comment text,id_schema text,rep_schema text) 
    OWNER TO postgres;
	
-- ---------------------------	
-- FUNCTION: Module Pages 
------------------------------

CREATE OR REPLACE FUNCTION public.module_pages(module_name text, page_name text, module_table text, page_table text)
  RETURNS void
  LANGUAGE 'plpgsql'
  COST 100
  VOLATILE
AS $BODY$
  DECLARE
    module_uuid uuid;
  BEGIN
    EXECUTE format ('SELECT modules_id FROM %s WHERE modules_name=$1', module_table) using module_name into module_uuid;
    EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', page_table) using uuid_generate_v4(), page_name, 1, LOCALTIMESTAMP(2), LOCALTIMESTAMP(2), 1, module_uuid, module_uuid;
  END;
  $BODY$;
ALTER FUNCTION public.module_pages(module_name text, page_name text, module_table text, page_table text)
  OWNER TO postgres;


  -- ---------------------------	
-- FUNCTION: Module DashBoard Menu 
------------------------------

CREATE OR REPLACE FUNCTION public.module_dmenu(module_name text, dmenu_name text, module_table text, dmenu_table text)
  RETURNS void
  LANGUAGE 'plpgsql'
  COST 100
  VOLATILE
AS $BODY$
  DECLARE
    module_uuid uuid;
  BEGIN
    EXECUTE format ('SELECT modules_id FROM %s WHERE modules_name=$1', module_table) using module_name into module_uuid;
    EXECUTE format ('INSERT INTO %s VALUES ($1, $2, $3, $4, $5, $6, $7)', dmenu_table) using uuid_generate_v4(), dmenu_name, 1, LOCALTIMESTAMP(2), LOCALTIMESTAMP(2), 1, module_uuid;
  END;
  $BODY$;
ALTER FUNCTION public.module_pages(module_name text, dmenu_name text, module_table text, dmenu_table text)
  OWNER TO postgres;

