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
        data.append('entry.2042001299', this.message);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSfX7fHKOPFJwghITfOf81Tl0tNa5ilJzBLm9qptZpc8WDpADg/formResponse?embedded=true', {
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