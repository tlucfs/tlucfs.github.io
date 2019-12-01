'use strict';

(($) => {
  new Vue({
    el: '#submit_form',
    data: {
      saved: false,
      focus: false,
      loading: false,
      message: ''
    },
    methods: {
      onSubmit() {
        this.saved = false;
        this.loading = true;

        let data = new FormData();
        data.append('entry.1245888719', this.message);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLScyRPRwpse2Fv0E7xrXC2UZoIHbjxlBfZXya4smqz7hsGC1Cg/formResponse?embedded=true', {
          method: 'post',
          body: data
        }).finally(() => {
          this.saved = true;
          this.message = '';
          $('#message').focus();

          this.loading = false;
        });
      }
    },
    mounted() {
      this.focus = true;
    }
  });
})(jQuery);
