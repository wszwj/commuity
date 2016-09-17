<template>
<div id="contact_detail" >
	<div class="comment_msg">发表回复</div>
	<form class="pure-form" style="padding-top: 15px;">
		<textarea class="leave_comment"></textarea>
		<div class="leave_button"><button type="button" class="pure-button pure-button-primary">发布</button></div>
	</form>
		
		<div class="comment_msg">共有xxx条回复：</div>
		<div class="comment_list">
		
			<section id="comment-{{comment.id}}" v-for="comment in commentList">
				
				<div class="list_info">
					<div class="list_head"><img :src="comment.u_headUrl ? comment.u_headUrl : normalHead" alt="{{comment.u_name}}"></div>
					<div class="list_name">{{comment.u_name}}</div>
					<div class="info_right"><time>{{comment.createTime}}</time><span class="floor">{{comment.floor}}</span></div>
				</div>
					
				<div class="list_reply" v-for="reply in comment.reply">
					<div class="list_info">
						<div class="list_head"><img :src="reply.u_headUrl ? reply.u_headUrl : normalHead" alt="{{reply.u_name}}"></div>
						<div class="list_name">{{reply.u_name}}</div>
						<div class="info_right"><time>{{reply.createTime}}</time><span class="floor">{{reply.floor}}</span></div>
					</div>
					<div class="list_say">{{reply.say}}</div>
				</div>
				<div class="list_say">{{comment.say}}</div>
				
				<div class="list_tool">
					<a href="javascript:" @click="myView('up',$index)">顶[{{comment.up}}]</a>
					<a href="javascript:" @click="myView('down',$index)">踩[{{comment.down}}]</a>
					<a href="javascript:" @click="replyFloor($index)">[回复]</a>
				</div>
				<div style="clear:both;"></div>
			
			
			</section>

		</div>
	
</div>
</template>
<script>
export default {
  data () {
	return{
	  normalHead:'https://q.qlogo.cn/g?b=qq&nk=847915164&s=100',
	  replyTo:0,
	  commentList: []
	}
	
  },
  ready () {
	var self=this;
	$.getJSON("comment.json",function(result){
		self.commentList=result;
	});
  },
  methods: {
		myView: function (act,index) {
			var id=this.commentList[index].id;
			// alert(id);
		},
		replyFloor: function (index) {
			var id=this.commentList[index].id;
			var floor=this.commentList[index].floor;
			// alert("正在回复"+floor+"楼");
			this.replyTo=floor;
			
		}
  }
}
</script>



