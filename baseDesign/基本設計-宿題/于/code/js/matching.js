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
    ,height: 300
    
    ,url: '../jsonData/clientData.json' //データの保存先
    ,toolbar: '#toolbarDemo'
    ,cols: [[ {field: 'Moon', title: '月', width:50}
          ,{field: 'Moon', title: '取引先CD', width:100  }
          ,{field: 'Moon', title: '名前', width:70  }
          ,{field: 'Moon', title: '担当者', width:90}
          ,{field: 'currentStatus', title: '現状', width:200}
          ,{field: 'goal', title: '目標', width:270,height:20, sort: true}
          ,{field: 'implementation', title: '実施', width:200,}
          ,{field: 'implementationResults', title: '実施結果', width:200,}
          ,{field: 'improvement', title: '改善点', width:200,}
          ,{field: 'operation', title: '操作', width:120,toolbar:'#iconDemo' }
    ]]
  });
  
});


layui.use('table', function(){
  let table = layui.table;
  let form = layui.form;
  
table.render({
  elem: '#matching-lower-records'
  ,height: 300
  
  ,url: '../jsonData/clientData.json' //データの保存先
  ,toolbar: '#toolbarDemo'
  ,cols: [[ {field: 'Moon', title: '月', width:50}
        ,{field: 'Moon', title: '取引先CD', width:100  }
        ,{field: 'Moon', title: '名前', width:70  }
        ,{field: 'Moon', title: '担当者', width:90}
        ,{field: 'currentStatus', title: '現状', width:200}
        ,{field: 'goal', title: '目標', width:270,height:20, sort: true}
        ,{field: 'implementation', title: '実施', width:200,}
        ,{field: 'implementationResults', title: '実施結果', width:200,}
        ,{field: 'improvement', title: '改善点', width:200,}
        ,{field: 'operation', title: '操作', width:120,toolbar:'#iconDemo' }
  ]]
});

});