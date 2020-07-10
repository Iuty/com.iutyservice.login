<template>
	<div class="modal-dialog" style="margin-top: 10%;">
	        <div class="modal-content">
	            <div class="modal-header">
	 
	                <h4 class="modal-title text-center" id="myModalLabel">登录</h4>
	            </div>
	            <div class="modal-body" id = "model-body">
	                <div class="form-group">
	 
	                    <input type="text" class="form-control"placeholder="用户名" 
						autocomplete="off" v-model="usr" value="usr">
	                </div>
	                <div class="form-group">
	 
	                    <input type="password" class="form-control" placeholder="密码" autocomplete="off" v-model="psw"></input>
	                </div>
	            </div>
	            <div class="modal-footer">
					<div>
						<input type=checkbox
						:disabled="remdisabled">记住我</input>
					</div>
	                <div class="form-group">
	                    <button type="button" class="btn btn-primary form-control"  @click=commit()>登录</button>
	                </div>
					<!--
	                <div class="form-group">
	                    <button type="button" class="btn btn-default form-control">注册</button>
	                </div>
	                -->
	            </div>
	        </div><!-- /.modal-content -->
	    </div><!-- /.modal -->
</template>

<script>
	import $ from 'jquery'
	import 'jquery.cookie'
	function getUrlParam(name) {
	 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	 var r = window.location.search.substr(1).match(reg); //匹配目标参数
	 if (r != null) return unescape(r[2]); return null; //返回参数值
	}
	export default{
		data:function(){
			return{
				usr:"",
				psw:"",
				remdisabled:false
				}
		},
		methods:{
			commit:function(){
				if(!this.usr){
					alert('用户名不能为空！')
					return
				}
				if(!this.psw){
					alert('密码不能为空！')
					return
				}
				$.ajax({
					url:'http://www.iutyservice.xyz/api/user',
					method:'POST',
					data:{
						usr:this.usr,
						psw:this.psw
					},
					complete:function(){
						
					},
					success:function(rtn){
						
						if(rtn.success){
							//location.reload();
							var url = getUrlParam('url')
							
							localStorage.setItem("SessionId",$.cookie("session"))
							if(url != null){
								window.location.replace(url);
							}
							else{
								alert("登录成功，无跳转页面")
							}
							
							//
						}
						else{
							alert("用户名或密码错误，请重新输入...")
						}
					},
					error:function(){
						
					}
				})
			}
		}
	}
	
</script>

<style>
	.modal-header{
		background-color: steelblue;
	}
</style>
