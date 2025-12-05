(function(){
  var body = document.body;
  var buildAds = body.getAttribute('data-build-ads') === 'true';
  var storageKey = 'spamAdsEnabled';

  function readStored(){
    try{
      var v = localStorage.getItem(storageKey);
      if(v === null) return null;
      return v === 'true';
    }catch(e){ return null; }
  }

  function writeStored(val){
    try{ localStorage.setItem(storageKey, val ? 'true' : 'false'); }catch(e){}
  }

  function applyState(enabled){
    if(enabled) body.classList.add('ads-on');
    else body.classList.remove('ads-on');

    var toggle = document.getElementById('spamAdToggle');
    if(toggle) toggle.checked = enabled;
  }

  // Initial state: prefer localStorage, fallback to build setting
  var stored = readStored();
  var initial = (stored === null) ? buildAds : stored;
  applyState(initial);

  // Bind toggle
  var toggleEl = document.getElementById('spamAdToggle');
  if(toggleEl){
    toggleEl.addEventListener('change', function(e){
      var on = !!e.target.checked;
      writeStored(on);
      applyState(on);
    });
  }
})();
