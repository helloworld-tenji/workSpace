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
      ,url: '../jsonData/testData.json' //データの保存先
      ,page: true 
      ,toolbar: '#toolbarDemo'
      ,cols: [[
          {title: '第１四半期', align: 'center', colspan: 5 }
      ],
        [ {field: 'id', title: '月', width:80, sort: true, fixed: 'left'}
        ,{field: 'username', title: '現状', width:200}
        ,{field: 'customerNameKana', title: '目標', width:270,height:20, sort: true}
        ,{field: 'operation', title: '実施', width:200,toolbar:'#iconDemo' }
      ]]
    });
    
  });