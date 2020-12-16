// 年度選択 
layui.use('laydate', function(){
    let laydate = layui.laydate;
    laydate.render({
      elem: '#year'
      ,type:'year' 
    });
  });

  //顧客関係管理List
  layui.use('table', function(){
    let table = layui.table;
    let form = layui.form;
    
    
    table.render({
      elem: '#customer-records'
      ,height: 330
      ,url: '../jsonData/clientData.json' //データの保存先
      ,toolbar: '#toolbarDemo'
      ,cols: [[
          {title: '第１四半期', align: 'center', colspan: 7 }
      ],
        [ {field: 'Moon', title: '月', width:50,  fixed: 'left'}
        ,{field: 'currentStatus', title: '現状', width:200}
        ,{field: 'goal', title: '目標', width:270,height:20, sort: true}
        ,{field: 'implementation', title: '実施', width:200,}
        ,{field: 'implementationResults', title: '実施結果', width:200,}
        ,{field: 'improvement', title: '改善点', width:200,}
        ,{field: 'operation', title: '操作', width:120,toolbar:'#iconDemo' }
      ]]
    });
    
  });