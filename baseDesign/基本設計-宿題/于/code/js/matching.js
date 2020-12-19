layui.use('laydate', function(){
    let laydate = layui.laydate;
    laydate.render({
      elem: '#year'
      ,type:'date' 
    });
  });

  //ajaxデータ操作
  $(caseData).render(()=> {
      $.ajax({
            url: "../jsonData/clientData.json",
            dataType:"json",
            type: "post",
            async:"true",
            success: function (data) {
                let tt = data.data;
                let str1="";
                
              for (let i = 0; i < tt.length; i++) {
                str1 += "<tr cate-id='0' fid='0'>" +
                "<td>" + tt[i]+ "</td>" +    //i代表下标，获取数据中的下标为i的1的值
                "<td>" + tt[i]+ "</td>" +    //i代表下标，获取数据中的下标为i的2的值
                "<td>" + tt[i]+ "</td>" +    //i代表下标，获取数据中的下标为i的3的值
                "<td>" + tt[i]+"</td>";    //i代表下标，获取数据中的下标为i的n的值，1-n是属性名
                  
              }
              test.innerHTML = str1;   //将数据写入html中
        },
        error:function (arg1) {
            alert("加载数据失败");
            console.log(arg1);
            
        }
      });
      
  })
