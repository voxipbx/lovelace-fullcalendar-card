class FullcalendarCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.title;
      this.content = document.createElement('div');
      this.content.style.padding = '16px 16px 16px';

      card.appendChild(this.content);
      this.appendChild(card);
    }
    //this.entities=this.processConfigEntities(this._config.entities);
    console.log(this.config.entities);
    console.log(this.entities);
    console.log(hass.states[entityId]);
    const entityId = this.config.entity;
    const state = hass.states[entityId].state;

    if (state == 'off') {
      this.content.innerHTML = '<i>none</i>';
    }
    else{
      const tasksList = hass.states[entityId].attributes.all_tasks;

      this.updateHtml(tasksList);
    }
  }

  processConfigEntities(e) {
    if(!Array.isArray(e))throw new Error("Entities need to be an array");return e.map((e,t)=>{if("string"==typeof e)e={entity:e,eventColor:"#3788d8"};else{if("object"!=typeof e||Array.isArray(e))throw new Error(`Invalid entity specified at position ${t}.`);if(!e.entity)throw new Error(`Entity object at position ${t} is missing entity field.`)}return e})
  }

  formatTask(task) {
    return this.content.innerHTML += `<div class=task>${task}</div>`;
  }

  updateHtml(tasksList) {
    this.content.innerHTML = `
      <style>
        .task {
          margin-bottom: 10px;
          color: var(--text-color);
          font: "var(--primary-font-family)";
      </style>
    `;

    tasksList.forEach((task) => {
      this.content.innerHTML = this.formatTask(task);
    });
  }

  setConfig(config) {
    this.config = config;
  }

}

customElements.define("fullcalendar-card", FullcalendarCard);
