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
      ,url: '../jsonData/contractManagement.json' //データの保存先
      ,toolbar: '#toolbarDemo'
      ,cols: [[ {field: 'Moon', title: '契約日', width:110}
            ,{field: 'Moon', title: '取引開始日', width:110  }
            ,{field: 'Moon', title: '取引終了日', width:110  }
            ,{field: 'year', title: '年限', width:60  }
            ,{field: 'updateCategory', title: '更新区分', width:90}
            ,{field: 'sever', title: '契約書保存サーバー', width:190,height:20, sort: true}
            ,{field: 'url', title: '契約書保存パス', width:200,}
            ,{field: 'fileName', title: '契約書保存ファイル名', width:200,}
            ,{field: 'improvement', title: '備考', width:200,}
            ,{field: 'createdDate', title: '作成時日', width:120,}
            ,{field: 'author', title: '作成者', width:100,}
            ,{field: 'updateDate', title: '更新時日', width:120,}
            ,{field: 'changer', title: '更新者', width:100,}
            ,{field: 'operation', title: '操作', width:120,toolbar:'#iconDemo', sort: true, fixed: 'right' }
      ]]
    });
    
  });