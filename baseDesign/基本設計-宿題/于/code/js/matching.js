layui.use('laydate', function(){
    let laydate = layui.laydate;
    laydate.render({
      elem: '#year'
      ,type:'date' 
    });
  });


  layui.use('table', function(){
    let table = layui.table;
    let form = layui.form;
    
  table.render({
    elem: '#matching-records'
    // ,height: 330
    ,cellMinWidth: 80
    
    ,url: '../jsonData/caseMatchingData.json' //データの保存先
    ,toolbar: '#toolbarDemo'
    ,cols: [[ {field: 'Choice', title: '選択',width:80, toolbar:'#radioDemo'}
          ,{field: 'customerCD', title: '取引先CD'}
          ,{field: 'projectTitle', title: '案件名'}
          ,{field: 'personInCharge', title: '担当者'}
          ,{field: 'operatingTime', title: '稼働時間'}
          ,{field: 'actualSpot', title: '現場', width:190}
          ,{field: 'operation', title: '操作',width:120,toolbar:'#iconDemo' ,sort: true, fixed: 'right' }
    ]]
  });
  
});


layui.use('table', function(){
  let table = layui.table;
  let form = layui.form;
  
table.render({
  elem: '#matching-lower-records'
  // ,height: 200
  ,cellMinWidth: 80
  ,url: '../jsonData/userMatchingData.json' //データの保存先
  ,toolbar: '#toolbarDemo'
  ,cols: [[ {field: 'Choice', title: '選択' , width:80,toolbar:'#radioDemo' }
        ,{field: 'userId', title: '社員ID'}
        ,{field: 'name', title: '名前'}
        ,{field: 'department', title: '部門'}
        ,{field: 'status', title: '稼働状況', width:190, toolbar:"#userDemo"}
        ,{field: 'operation', title: '操作', width:120,toolbar:'#iconDemo',sort: true, fixed: 'right' }
  ]]
});

});

$(function () {
  var syain = "";
  for (var i in syaindatas) {
      if (syaindatas[i].stauts == "稼働中") {
          syain += "<tr style='background:yellow'>";
          syain += "<td >" + syaindatas[i].name + "</td>";
          syain += "</tr>";

      } else {
          syain += "<tr>";
          syain += "<td >" + syaindatas[i].name + "</td>";
          syain += "</tr>";
      }

  }
  $("#syain_data").html(syain);
})