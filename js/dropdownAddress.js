$(document).ready(function(){

    load_json_data_region('region');
    var region_selected='';
    var province_selected='';
    var city_selected='';
    var barangay_selected='';

    function load_json_data_region(id, parent_id)
    { 
        var html_code = '';
        $.getJSON('https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json', function(data){
       
             
         $.each(data, function(key, value){
             if(value.region_name == "REGION IV-A"){
           html_code += '<option value="'+value.region_name+'">'+value.region_name+'</option>';      
           load_json_data_province('province', value.region_name);
           }
         });
         $('#'+id).html(html_code);
        });
    }

    
    function load_json_data_province(id, parent_id)
    {
     var html_code = '';
     region_selected = parent_id;
     $.getJSON('https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json', function(data){
    
        
      $.each(data, function(key, value){
        
       if(parent_id == value.region_name){
        $.each(value.province_list, function(key, value){
            //province is loaded when selecting a region
            if(key == "CAVITE"){
                html_code += '<option value="'+key+'">'+key+'</option>';
                load_json_data_city('city', key);
            }

        

        });

       }
        
      });
      $('#'+id).html(html_code);
     });
    
    }

    function load_json_data_city(id, parent_id)
    {
     var html_code = '';
     province_selected=parent_id;
     $.getJSON('https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json', function(data){
    
        
      $.each(data, function(key, value){
        
       if(region_selected == value.region_name){

        $.each(value.province_list, function(key, value){
            //province is loaded when selecting a region 
            if(key == province_selected){
                $.each(value.municipality_list, function(key, value){
                    //city is loaded when selected a municipality
                    if(key == "GENERAL TRIAS CITY"){
                        html_code += '<option value="'+key+'">'+key+'</option>';
                        load_json_data_barangay('barangay', key);
                    }
                    
                });
            }
        });
       }
        
      });
      $('#'+id).html(html_code);
     });
    }


    function load_json_data_barangay(id, parent_id)
    {
     var html_code = '';
     city_selected=parent_id;
     $.getJSON('https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json', function(data){
    
      html_code += '<option value="">Select '+id+'</option>';
        
      $.each(data, function(key, value){
        
       if(region_selected == value.region_name){

        $.each(value.province_list, function(key, value){
            //province is loaded when selecting a region 
            if(key == province_selected){
                $.each(value.municipality_list, function(key, value){
                    //city is loaded when selected a municipality
                    
                    if(key == city_selected){
                        $.each(value.barangay_list, function(key, value){
                            html_code += '<option value="'+value+'">'+value+'</option>';
                        }); 
                    }
                });
            }
        });
       }
        
      });
      $('#'+id).html(html_code);
     });
    }


   




    

    
  
    });
