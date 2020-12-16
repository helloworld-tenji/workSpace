layui.use('table', function(){
    let table = layui.table;
    let form = layui.form;
    
    
    table.render({
      elem: '#record'
      ,height: 330
      ,url: './jsonData/testData.json' //データの保存先
      ,page: true 
      ,toolbar: '#toolbarDemo'
      ,cols: [[ 
        {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
        ,{field: 'username', title: '取引先名', width:150}
        ,{field: 'customerNameKana', title: '取引先名カナ', width:190, sort: true}
        ,{field: 'bp', title: 'BP', width:120} 
        ,{field: 'streetAddress', title: '住所', width: 200}
        ,{field: 'tel', title: 'Tel', width: 150, sort: true}
        ,{field: 'mail', title: 'Mail', width: 150, sort: true}
        ,{field: 'businessField', title: '業務分野', width: 120}
        ,{field: 'businessContent', title: '業務内容', width: 135, sort: true}
        ,{field: 'remarks', title: '備考', width:80}
        ,{field: 'responsibleParty', title: '担当者', width:80}
        ,{field: 'createdDate', title: '作成日', width:80}
        ,{field: 'author', title: '作成者', width:80}
        ,{field: 'updateDate', title: '更新日', width:80}
        ,{field: 'changer', title: '更新者', width:80}
        ,{field: 'operation', title: '操作', width:120,toolbar:'#iconDemo' }
      ]]
    });
    
  });

  // list削除
  function list_del(obj,id) {
    layer.confirm('削除してもよろしいですか？', {
      icon: 3,
      title: 'メッセージ',
      btn: ['確認', '取消']
  }, function(index) {
      //发异步删除数据
      $(obj).parents("tr").remove();
      layer.msg('削除しました!', {
          icon: 1,
          time: 1000
      });
  });
  }

