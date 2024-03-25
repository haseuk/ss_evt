<script type="text/javascript">
  const art1 = document.querySelector('.art1');
  const tab = document.querySelectorAll('.store-tab .dv-tab');
  Array.prototype.forEach.call(tab, function(e) {
    e.addEventListener('click', function() {
      let idx = e.getAttribute('data-tab');
      art1.setAttribute('data-store', idx);
    });
  });

  const modelOpen = document.querySelector('.model-open');
  const modelArticle = document.querySelector('.model');
  modelOpen.addEventListener('click', function() {
    if(modelArticle.classList.contains('on')) {
      modelArticle.classList.remove('on');
      modelOpen.classList.remove('on');
    } else {
      modelArticle.classList.add('on');
      modelOpen.classList.add('on');
    }
  });
</script>