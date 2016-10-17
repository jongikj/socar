

	




var dummy = (function(){
		var _ssn,_name,_gender,_age;
		var setAge = function(age){this._age=age;};
		var setGender = function(gender){this._gender=gender;};
		var setSSN = function(ssn){this._ssn=ssn;};
		var setName = function(name){this._name=name;};
		var getAge = function(){return this._age;};
		var getSSN = function(){return this._ssn;};
		var getName = function(){return this._name;};
		var getGender = function(){return this._gender;};
		var init = function(){onCreate();};
		var setContentView = function(){
			$('#member_content_img_home').attr('alt','home').attr('src',app.img()+'/home.png').css('width','30px');
			$('#member_content_a_home').click(function(){controller.home();});
			$('#member_content').addClass('box').css('font-size' ,'15px');
			$('#member_content > article').css('width','300px')
			.addClass('center').addClass('text_left');
			$('#member_content > article a').css('font-size' ,'17px').addClass('cursor');
			$('#member_content > h1').text('MEMBER MGMT');
			$('#member_content_ol > li > a').addClass('remove_underline');
			$('#member_content_ol > li:first > a').text('SING UP');
			$('#member_content_ol > li:nth(1) > a').text('MYINFO');
			$('#member_content_ol > li:nth(2) > a').text('UPDATE MY INFO');
			$('#member_content_ol > li:nth(3) > a').text('SING OUT');
			$('#member_content_ol > li:nth(4) > a').text('LOG IN');
			$('#member_content_ol > li:nth(5) > a').text('LOG OUT');
			$('#member_content_ol > li:nth(6) > a').text('LIST');
			$('#member_content_ol > li:nth(7) > a').text('SEARCH FOR HAPPINESS');
			$('#member_content_ol > li:nth(8) > a').text('MEMBER COUNT');
			$('#member_regist').addClass('box');
			$('#member_regist #bt_join').addClass('btn').addClass('btn-primary');
			$('#member_regist #bt_cancel').addClass('btn').addClass('btn-danger');
			$('#member_regist #check_dup').addClass('btn').addClass('btn-danger');////////////
				//
			$('#member_regist_form').addClass('form-horizontal');
			$('#member_regist_form > div').addClass('form-group').addClass('form-group-lg');
			$('#member_regist_form > div > label').addClass('col-sm-2').addClass('control-label');
			$('#member_regist_form > div > div').addClass('col-sm-10');
			$('#member_regist_form > div > div > input').addClass('form-control');

			$('#member_regist #rd_major > label:gt(0)').addClass('radio-inline');
			$('#member_regist #ck_subject').addClass('checkbox');
			$('#member_regist #ck_subject > label').addClass('checkbox-inline');
			$('#member_find_form').attr('action',sessionStorage.getItem('context')+'/member/search');
			$('#member_find_form input[type="hidden"]').attr('name','context').attr('value',app.context());
			$('#member_login_form').attr('method','post').attr('action',sessionStorage.getItem('context')+'/member/login');
			$('#member_login_form input[type=hidden]').attr('value',app.context());
		};
		var onCreate = function(){
			setContentView();	
			$('#regist').click(function(){controller.move('member','regist')});
			$('#detail').click(function(){controller.move('member','detail')});
			$('#update').click(function(){controller.move('member','update');});
			$('#delete').click(function(){controller.move('member','delete');});
			$('#login').click(function(){controller.move('member','login');});
			$('#logout').click(function(){controller.move('member','logout');});
//			$('#list').click(function(){controller.move('member','list');});
			$('#findBy').click(function(){controller.move('member','findBy');});
			$('#count').click(function(){controller.move('member','count');});
			$('#member_find_form input[type="submit"]').click(function(){$('#member_find_form').submit();});
			$('#member_list_table .name').click(function(){alert('name');controller.moveWithKey('member','a_detail','lee');});
			$('#member_list_table .regist').click(function(){alert('regist');controller.moveWithKey('grade','regist','lee');});
			$('#member_list_table .update').click(function(){alert('regist');controller.moveWithKey('grade','update','lee');});
			$('#member_login_form input[type=submit]').click(function() {$('#member_login_form').submit();});
		};
		
		
		return{
			setSSN : setSSN,
			setName : setName,
			setAge : setAge,
			setGender : setGender,
			getName : getName,
			getAge : getAge,
			getSSN : getSSN,
			getGender : getGender,
			init : init,
			spec : function(){
				var setName = document.querySelector('#name').val();
				var ssn = document.querySelector('#ssn').val();
				var result = '';
				var now = new Date().getFullYear();
				console.log("now    "+now);
				var gender = parseInt(ssn.substring(7,8));
				var ageTemp = parseInt(ssn.substring(0,2));
				console.log("ageTemp    "+ageTemp);
				switch (gender) {
				case 1: case 5: setGender("남"); setAge(now-(1900+ageTemp));console.log("1900+ageTemp "+(1900+ageTemp));break;
				case 3: case 7:setGender("남"); setAge(now-(2000+ageTemp));break;
				case 2: case 6:setGender("여");setAge(now-(1900+ageTemp));console.log("1900+ageTemp "+(1900+ageTemp));break;
				case 4: case 8:setGender("여");setAge(now-(2000+ageTemp));break;
				default:setGender = "잘못된값을 입력하셨습니다";}
				document.querySelector('#result_name').innerHTML=getName();
				document.querySelector('#result_age').innerHTML=getAge();
				document.querySelector('#result_gender').innerHTML=getGender();
				// 인스턴스 변수 선언하고 게터 세터 하고 끌고 오는 방식하고 똑같다
			},
			pub_login_form : function(){
			
				$('#pub_article').html(LOGIN_FORM);
				$('#login_btn').click(function(e){
					e.preventDefault();
					$.ajax({
						url : app.context()+'/member/login',
						type : 'POST',
						data : {'id':$('#id').val(),'pw':$('#pw').val()},
						dataType : 'json',
						success : function(data){
							if (data.id==='NONE') {
								alert('잘못된 정보입니다');	
							} else {
								alert('사랑합니다 '+data.name+'님');
							
							$('#pub_header').empty().load(app.context()+'/member/logined/header');
							$('#pub_article').html(STUDENT_MAIN);
							//// .on은 다중적인 이벤트를 발생시킬때 쓴당
							}
						},
						error : function(xhr,status,msg){
							alert('로그인실패이유'+msg);
						}
					});
				});
			},
			pub_sign_up_form : function() {
				$('#pub_article').empty().append(SIGN_UP_FORM);
				member.init();
				$('#check_dup').click(function(e){
					e.preventDefault();
					if (util.pwChecker($('#id').val())==='yes') {
						$.ajax({
							url : app.context()+'/member/check_dup/'+$('#id').val(),
							success : function(data){
								alert('중복체크결과'+data.message)
								if (data.flag==='TRUE') {
									$('#id_box').html('<input type="text" id="id" placeholder="'+data.message+'"><input type="button" id="re_check" name="re_check" value="다시조회"/>');
									member.init();
								} else {
									$('#id_box').html('<input type="text" id="id" value="'+data.temp+'"><input type="button" id="use_input_id" name="use_input_id" value="그대로사용"/>');
									member.init();
									var use_id = data.temp;
									var password = $('#password').val();
									$('#bt_join').click(function(e){
										alert('조인33');
										e.preventDefault();
										alert('조인');
										var join_info = {
										'name': $('#username').val(),
										'id' : $('#id').val(),
										'pw' : $('#password').val(),
										'ssn' : $('#ssn').val(),
										'email' : $('#email').val(),
										'phone' : $('#phone').val()
										};
										//$('#radio').val()
										//$('#ck_subject').val()
										$.ajax({
											url : app.context()+'/member/signup',
											type : 'post',
											contentType : 'application/json',
											data : JSON.stringify(join_info),
											dataType : 'json',
											success : function(data){
												alert('결과 : '+data.message);
												if (data.message==='success') {
													alert('success');
													member.pub_login_form();
													
												} else {
													alert('회원가입시 알수없는 에러가 발생했습니다');
												}
											},
											error : function(xhr,status,msg){
												alert('회원가입 시 에러발생'+msg); 
											}
										});
									});
								}
								},
							error : function(x,s,e){
								alert('id 중복체크에러')
								}
						});
					} else {
						alert('정규식에 맞지 않음');
						$('#id').val('').focus();
											}
				
				});
				 $(function() {
			            $('#password').keyup(function() {
			               $('font[name=check]').text('');
			            });
			            $('#chpass').keyup(function() {
			               if($('#password').val()!=$('#chpass').val()){
			                  $('#id_font').text('');
			                  $('#id_font').html('<font name="check"size="2"color="red">비밀번호가 일치하지않습니다');
			               }else{
			                  $('#id_font').text('');
			                  $('#id_font').html('<font name="check"size="2"color="green">비밀번호가 일치합니다');
			               }
			            });
			         
			      });
			      },
			      detail : function(){
			    	  $('#pub_header').empty().load(app.context()+'/member/logined/header');			    	  
			    	  $('#pub_article').html(DETAIL_FORM);			    	  
				    	  $.getJSON(app.context()+'/member/detail',function(data){
								  $('#member_detail #img').attr('src',app.img()+'/member/'+data.profileImg);
						    	  $('#member_detail #id').text(data.id);
						    	  $('#member_detail #name').text(data.name);
						    	  $('#member_detail #gender').text(data.gender);
						    	  $('#member_detail #u_email').text(data.email);
						    	  $('#member_detail #major').text('전공');
						    	  $('#member_detail #subject').text('과목');
						    	  $('#member_detail #birth').text('생일');
						    	  $('#member_detail #reg_date').text(data.regDate);
						    	  $('#go_update').click(function(){
							    	 alert('업데이트진입2');
						    		  $('#member_detail #u_pw').html('<input type="text" id="pw" value="'+data.pw+'">');
							    	  $('#member_detail #u_email').html('<input type="text" id="email" value="'+data.email+'">');
							    	//$('#member_detail #u_major').text('<input type="text" id="email" value="'+data.email+'">');
							    	//$('#member_detail #u_subject').text('<input type="text" id="email" value="'+data.email+'">');
						    	  $('#bt_box').html('<input type="button" value="확인" id="confirm" /><input type="button" value="취소" id="cancel" />');
						    	  $('#confirm').click(function(){
						    		  alert('확인버튼진입2');
						    		  alert('변경 id : '+$('#member_detail #id').html());
					    			  alert('변경 pw : '+$('#pw').val());
					    			  alert('변경 이메일 : '+$('#email').val());
						    		  var confirm_info = {
											'id': $('#member_detail #id').html(),
						    				  'pw' : $('#pw').val(),
						    				  'email' : $('#email').val()
												};
						    		  
						    		  $.ajax({
						    		  url : app.context()+'/member/update',
						    		  type : 'post',
						    		  contentType : 'application/json',
						    		  data : JSON.stringify(confirm_info),
						    		  dataType : 'json',
						    		  async : false,
						    		  success : function(data){
						    			  
						    			  if (data.message==='success') {
											member.detail();
										} else {
											alert('서버다녀왔는데실패함');
										}  
						    		  },
						    		  error : function(x,s,m){
						    			  alert('업데이트에러'+m);
						    		  }
						    		  
						    		  
						    		  });
						    	  });
						    	  });
						    	  $('#go_unregist').click(function(){
						    		  $('#pub_article').html(UNREGIST_FORM);
						    	 $('#unregist_bt').click(function(e){
						    		 e.preventDefault();
						    		alert('탈퇴버튼');
						    		 $.ajax({							
							    			url : app.context()+'/member/unregist',
							    		  	type : 'post',
							    		  	data : {'pw':$('#unregist_pw').val()},
							    		  	dataType : 'json',
							    		  	success : function(data){
							    		  		alert('비번비교');
							    		  		if (data.message==='fail') {
							    		  		  $('#pub_header').empty().load(app.context()+'/member/logined/header');	
							    		  			$('#pub_article').html(UNREGIST_FORM);
												} else {
													location.href = app.context()+'/';
												}
							    		  	},
							    			error : function(xhr,status,msg){
												alert('회원탈퇴 시 에러발생'+msg); 
											}
							    		  });
									});
						    	  
						    	  });
				    	  });
			      }
			   
				};   
			})();


var util = (function(){
	return {
		isNumber : function(value) {
			  return typeof value === 'number' && isFinite(value)
			},
		pwChecker : function(value) {
			var pw_regex = /^.*(?=.{3,10})(?=.*[a-zA-Z0-9]).*$/;
			return pw_regex.test(value)?"yes":"no";
		}	
	};
})();