customElements.define("fullcalendar-card",class extends te{constructor(){super(),this._activeView="dayGridMonth",this.initialView="dayGridMonth",this.views=["dayGridMonth","dayGridWeek","dayGridDay"]}setConfig(e){if(!e||!e.entities)throw new Error("Invalid configuration");this._config=e,this.entities=this.processConfigEntities(this._config.entities),this.calendarService=new Gd}static get styles(){return console.log("getting styles"),[qd,K`
        ${X(We.a)}
      	${X(os.a)}
      	${X(js.a)}
      	${X(jd.a)}
      	${X(Wd.a)}
      	${X(Fd.a)}
      	
        :host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }
        
        :host([ispanel]) {
    		height: calc(100% - 6em);
        }
        
        :host([ispanel]) ha-card {
        	height: calc(100% - 6em);
        }
        
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        :host([narrow]) .header {
          padding-right: 8px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: initial;
        }

        .navigation {
          display: flex;
          align-items: center;
          flex-grow: 0;
        }

        a {
          color: var(--primary-text-color);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .today {
          margin-right: 20px;
        }

        .prev,
        .next {
          --mdc-icon-button-size: 32px;
        }

        ha-button-toggle-group {
          color: var(--primary-color);
        }
        
        #calendar {
          flex-grow: 1;
          background-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          min-height: 400px;
          --fc-neutral-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-list-event-hover-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-theme-standard-border-color: var(--divider-color);
          --fc-border-color: var(--divider-color);
          height: 100%;
        }

        a {
            color: inherit !important; 
        }

        .fc-theme-standard .fc-scrollgrid {
          border: 1px solid var(--divider-color);
        }

        .fc-scrollgrid-section-header td {
          border: none;
        }

        th.fc-col-header-cell.fc-day {
          color: var(--secondary-text-color);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .fc-daygrid-dot-event:hover {
          background-color: inherit
        }

        .fc-daygrid-day-top {
          text-align: center;
          padding-top: 5px;
          justify-content: center;
        }

        table.fc-scrollgrid-sync-table
          tbody
          tr:first-child
          .fc-daygrid-day-top {
          padding-top: 0;
        }

        a.fc-daygrid-day-number {
          float: none !important;
          font-size: 12px;
        }

        .fc .fc-daygrid-day-number {
            padding: 3px !important;
        }

        .fc .fc-daygrid-day.fc-day-today {
          background: inherit;
        }

        td.fc-day-today .fc-daygrid-day-top {
          padding-top: 4px;
        }

        td.fc-day-today .fc-daygrid-day-number {
          height: 24px;
          color: var(--text-primary-color) !important;
          background-color: var(--primary-color);
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          width: max-content;
          min-width: 24px;
          line-height: 140%;
        }

        .fc-daygrid-day-events {
          margin-top: 4px;
        }

        .fc-event {
          border-radius: 4px;
          line-height: 1.7;
        }

        .fc-daygrid-block-event .fc-event-main {
          padding: 0 1px;
        }

        .fc-day-past .fc-daygrid-day-events {
          opacity: 0.5;
        }

        .fc-icon-x:before {
          font-family: var(--material-font-family);
          content: "X";
        }

        .fc-popover {
          background-color: var(--primary-background-color) !important;
        }

        .fc-popover-header {
          background-color: var(--secondary-background-color) !important;
        }

        .fc-theme-standard .fc-list-day-frame {
          background-color: transparent;
        }

        .fc-list.fc-view,
        .fc-list-event.fc-event td {
          border: none;
        }

        .fc-list-day.fc-day th {
          border-bottom: none;
          border-top: 1px solid var(--fc-theme-standard-border-color, #ddd) !important;
        }

        .fc-list-day-text {
          font-size: 16px;
          font-weight: 400;
        }

        .fc-list-day-side-text {
          font-weight: 400;
          font-size: 16px;
          color: var(--primary-color);
        }

        .fc-list-table td,
        .fc-list-day-frame {
          padding-top: 12px;
          padding-bottom: 12px;
        }

        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-time,
        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-title,
          :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom {
          display: none;
        }

        :host([narrow]) .fc .fc-dayGridMonth-view .fc-daygrid-event-harness-abs {
          visibility: visible !important;
          position: static;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events {
          display: flex;
          min-height: 2em !important;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 2em;
          height: 2em;
          overflow: hidden;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table {
          overflow: hidden;
        }

        .fc-scroller::-webkit-scrollbar {
          width: 0.4rem;
          height: 0.4rem;
        }

        .fc-scroller::-webkit-scrollbar-thumb {
          -webkit-border-radius: 4px;
          border-radius: 4px;
          background: var(--scrollbar-thumb-color);
        }

        .fc-scroller {
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
      `]}get calendarHtml(){const e=$d.filter(e=>this.views.includes(e.value));return j`<ha-card>
      ${this.calendar?j`
            <div class="header">
              ${this.narrow?j`
                    <div class="controls">
                      <h1>
                        ${this.calendar.view.title}
                      </h1>
                      <div>
                        <ha-icon-button
                          label=${this._hass.localize("ui.common.previous")}
                          icon="hass:chevron-left"
                          class="prev"
                          @click=${this._handlePrev}
                        >
                        </ha-icon-button>
                        <ha-icon-button
                          label=${this._hass.localize("ui.common.next")}
                          icon="hass:chevron-right"
                          class="next"
                          @click=${this._handleNext}
                        >
                        </ha-icon-button>
                      </div>
                    </div>
                    <div class="controls">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >Today</mwc-button
                      >
                      <ha-button-toggle-group
                        .buttons=${e}
                        .active=${this._activeView}
                        @value-changed=${this._handleView}
                      ></ha-button-toggle-group>
                    </div>
                  `:j`
                    <div class="navigation">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >Today</mwc-button
                      >
                      <ha-icon-button
                        label=${this._hass.localize("ui.common.previous")}
                        icon="hass:chevron-left"
                        class="prev"
                        @click=${this._handlePrev}
                      >
                      </ha-icon-button>
                      <ha-icon-button
                        label=${this._hass.localize("ui.common.next")}
                        icon="hass:chevron-right"
                        class="next"
                        @click=${this._handleNext}
                      >
                      </ha-icon-button>
                    </div>
                    <h1>
                      ${this.calendar.view.title}
                    </h1>
                    <ha-button-toggle-group
                      .buttons=${e}
                      .active=${this._activeView}
                      @value-changed=${this._handleView}
                    ></ha-button-toggle-group>
                  `}
            </div>
          `:""}
      <div id="calendar"></div></ha-card>
    `}render(){return[this.calendarHtml]}get root(){return this.shadowRoot?this.shadowRoot:this}static get properties(){return{narrow:{type:Boolean,reflect:!0},views:{type:Object},initialView:{type:Object},isPanel:{type:Boolean,reflect:!0},_hass:{type:Object}}}processConfigEntities(e){if(!Array.isArray(e))throw new Error("Entities need to be an array");return e.map((e,t)=>{if("string"==typeof e)e={entity:e,eventColor:"#3788d8"};else{if("object"!=typeof e||Array.isArray(e))throw new Error(`Invalid entity specified at position ${t}.`);if(!e.entity)throw new Error(`Entity object at position ${t} is missing entity field.`)}return e})}updateAspectRatio(){this._measureCard(),this.calendar&&this.calendar.updateSize()}getEventSources(){return this.entities.map(e=>({events:async t=>await this.calendarService.getEvents(this._hass,e,t.start,t.end),id:e.entity.startsWith("calendar")?e.name?e.name:this._hass.states[e.entity].attributes.friendly_name:"Entities",color:e.eventColor}))}updated(e){if(super.updated(e),this.calendar&&(e.has("narrow")&&(this.views=this.narrow?["list","dayGridMonth","dayGridDay"]:["dayGridMonth","dayGridWeek","dayGridDay"],this.initialView=this.narrow?"list":"dayGridMonth",this._activeView=this.initialView,this.calendar.changeView(this._activeView),this.calendar.setOption("eventDisplay",this.narrow?"list-item":"auto"),this.requestUpdate()),e.has("views")&&!this.views.includes(this._activeView)&&(this._activeView=this.initialView&&this.views.includes(this.initialView)?this.initialView:this.views[0],this.calendar.changeView(this._activeView),this.requestUpdate()),this._config&&this._hass)){const t=e.get("_hass");t&&t.themes===this._hass.themes||function(e,t,n,r){void 0===r&&(r=!1),e._themes||(e._themes={});var i=t.default_theme;("default"===n||n&&t.themes[n])&&(i=n);var a=Zd({},e._themes);if("default"!==i){var o=t.themes[i];Object.keys(o).forEach((function(t){var n="--"+t;e._themes[n]="",a[n]=o[t]}))}if(e.updateStyles?e.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,a),r){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=a["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}}(this,this._hass.themes,this._config.theme)}}firstUpdated(){var e=this.root.querySelector("#calendar");window.innerHeight,window.innerWidth;Pd.setDefaultProps({maxWidth:"",maxHeight:""}),this.calendar=new Ao(e,{plugins:[Ps,$s,is],initialView:this.initialView,locale:this._hass.language,eventDisplay:"auto",views:{list:{visibleRange:Xd}},headerToolbar:!1,height:"parent",eventTimeFormat:{hour:"numeric",minute:"2-digit",hour12:!1},eventSources:this.getEventSources(),windowResize:()=>{this.updateAspectRatio()},eventDidMount:function(t){Pd(t.el,{content:`<div style="min-width:40em; min-height:10em;">\n  \t\t\t\t\t\t<h2>${t.event.title}</h2>\n  \t\t\t\t\t\t<p><ha-icon icon="mdi:clock"></ha-icon> ${t.event.extendedProps.displayTime}</p>\n\t \t\t\t\t\t<p></p>\n\t \t\t\t\t\t<p><ha-icon icon="mdi:calendar"></ha-icon> ${t.event.source.id}</p>\n\t \t\t\t\t</div>\n\t \t\t`,arrow:!1,animation:"scale-extreme",placement:"auto",theme:"homeassistant",appendTo:e,trigger:"click",hideOnClick:!0,onHide(e){let t=new Date;e.lastHidden=t},onShow(e){let t=new Date;if(e.lastHidden){if(t.getTime()-e.lastHidden.getTime()<500)return!1}},popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","right"]}},{name:"preventOverflow",options:{altAxis:!0,tether:!1}}]},allowHTML:!0})}}),this.calendar.render(),this._measureCard(),this.requestUpdate()}getCardSize(){return 2}_measureCard(){let e=this.shadowRoot.querySelector("#calendar");e&&(this.narrow=e.offsetWidth<870,this.requestUpdate())}set hass(e){this._hass=e,this.calendar&&this.updateAspectRatio()}_handleNext(){this.calendar.next(),this.requestUpdate()}_handlePrev(){this.calendar.prev(),this.requestUpdate()}_handleToday(){this.calendar.today(),this.requestUpdate()}_handleView(e){this._activeView=e.detail.value,this.calendar.changeView(this._activeView),this.requestUpdate()}})}]);
