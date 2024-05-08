<script type="text/javascript">
  $(function() {
    var sticky = new Sticky('.evt-sticky');

    let intersectionRatioValue = 0.5;
    function ratioCheck() {
      if(window.innerWidth > 1440) {
        intersectionRatioValue = 0.5;
      }
    }
    ratioCheck();

    window.addEventListener('resize', ratioCheck);

    let evtScrollY;
    window.addEventListener("scroll", evtHandleScroll);
    function evtHandleScroll() {
      evtScrollY = window.pageYOffset || document.documentElement.scrollTop;
      initIntersectionObserver();
    }

    let evtSection = document.querySelector('.evt-section');
    function initIntersectionObserver() {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > intersectionRatioValue) {
            let idx = entry.target.getAttribute('data-evt');
            evtSection.setAttribute('data-view', idx);
          }
        })
      });
      const move = document.querySelectorAll('[mov]');
      move.forEach((el) => {
        io.observe(el);
      });
    }

    window.onload = function() {
      initIntersectionObserver();
    }
  });
</script>