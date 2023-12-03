export default (await import('vue')).defineComponent({
components: {
HomePageVue,
FAQ,
SideBar,
SearchFilterVue,
SlideShowVue,
UpLoadVue,
PushFileVue,
TestDownloadVue,
SingUp,
},
computed: {
isHomePage() {
// Kiểm tra nếu đang ở trang chủ
return this.$route.path === "/";
},
},
});
