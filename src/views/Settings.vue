<template>
  <div class="settings">
    <ul>
      <li><span>Notification</span>
        <div class="onoffswitch">
          <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch1" checked>
          <label class="onoffswitch-label" for="myonoffswitch1">
            <div class="onoffswitch-inner">
              <div class="onoffswitch-active">
                <div class="onoffswitch-switch">ON</div>
              </div>
              <div class="onoffswitch-inactive">
                <div class="onoffswitch-switch">OFF</div>
              </div>
            </div>
          </label>
        </div>
      </li>
      <li><span>Notification</span>
        <div class="onoffswitch">
          <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch2">
          <label class="onoffswitch-label" for="myonoffswitch2">
            <div class="onoffswitch-inner">
              <div class="onoffswitch-active">
                <div class="onoffswitch-switch">ON</div>
              </div>
              <div class="onoffswitch-inactive">
                <div class="onoffswitch-switch">OFF</div>
              </div>
            </div>
          </label>
        </div>
      </li>
      <li><span>Notification</span>
        <div class="onoffswitch">
          <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch3" checked>
          <label class="onoffswitch-label" for="myonoffswitch3">
            <div class="onoffswitch-inner">
              <div class="onoffswitch-active">
                <div class="onoffswitch-switch">ON</div>
              </div>
              <div class="onoffswitch-inactive">
                <div class="onoffswitch-switch">OFF</div>
              </div>
            </div>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
  }
</script>
