jQuery(function(){
  
  
  jQuery.get('https://corona.in.com.bd/api/stats', function(res){
    console.log(res);
    jQuery('#confirmed').html(formatNumber(res.total.confirmed));
    jQuery('#recovered').html(formatNumber(res.total.recovered));
    jQuery('#deaths').html(formatNumber(res.total.deaths));
    jQuery('#tested').html(formatNumber(res.total.tested));

    jQuery('#new_confirmed').html(formatNumber(res.last.confirmed));
    jQuery('#new_recovered').html(formatNumber(res.last.recovered));
    jQuery('#new_deaths').html(formatNumber(res.last.deaths));
    jQuery('#new_tested').html(formatNumber(res.last.tested));

    jQuery('#last_update').html("<span style='color:black'>Source:IEDCR, Last Update</span>: "+res.lastUpdate);


   

    
  });

//districtwise
jQuery.get('https://corona.in.com.bd/api/districts', function(res){
     var data =  `<table class="table table-bordered" id = "data_table">
  <thead>
    <tr>
      <th scope="col">District</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
    </tr>
  </thead>
    <tbody>
    <tr>`;
    res.data.forEach(function(district){

      var nextData = `<td> ${district.name}</td>
      <td>${district.confirmed} </td>
      <td>${district.recovered} </td>
      <td>${district.deaths} </td></tr>`;
      data += nextData;

    });

    data += `</tbody></table>`;
    console.log(data);
    jQuery('#disticts').html(data);
    
    $('#data_table').DataTable({
      order: [
        [1,'desc']
      ]
    });
    
    
    jQuery('#progress').hide();  //hide progress
});  

  //worldwide
  jQuery.get('https://covid19.mathdro.id/api/', function(res){
    jQuery('#wconfirmed').html(formatNumber(res.confirmed.value));
    jQuery('#wrecovered').html(formatNumber(res.recovered.value));
    jQuery('#wdeaths').html(formatNumber(res.deaths.value));
  });


  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
  
});

