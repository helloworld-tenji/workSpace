layui.use('laydate', function(){
    let laydate = layui.laydate;
    laydate.render({
      elem: '#year'
      ,type:'date' 
    });
  });

  
    
    
    layui.use('table', function(){
      var table = layui.table;
      
      table.render({
        elem: '#management'
        ,url:'../jsonData/management.json'
        ,height: 300
        ,cols: [[
          {field:'id', width:80, title: 'ID', sort: true, fixed: 'left'}
          ,{field:'projectTitle', width:100, title: '案件名'}
          ,{field:'user', width:100, title: '社員名', sort: true}
          ,{field:'scheduledDate', width:120, title: '面接予定日'}
          ,{field:'fixedPlace', width: 120, title: '面接予定場所'}
          ,{field:'remarks', width:80, title: '備考', sort: true}
          ,{field:'personInCharge', width:100, title: '担当者', sort: true}
          ,{field:'createdDate', width:120, title: '作成日時'}
          ,{field:'author', width:80, title: '作成者'}
          ,{field:'updateDate', width:120, title: '更新日時'}
          ,{field:'changer', width:80, title: '更新者'}
          ,{field:'operation', width:120, title: '操作', toolbar:'#iconDemo', sort: true, fixed: 'right'}
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

