import React, { Component } from "react";
import Profile from './Profile';

import './TabbedContainer.css';

class TabbedContainer extends Component {
    state = {
        tabs: [
          { id: 1, name: "Phase 1", activities: []},
          { id: 2, name: "Phase 2", activities: []}
        ],
        currentTab: { id: 1, name: "Phase 1", activities: []},
        editMode: false,
        editTabNameMode: false
      };

      addToActivities = (activity) => {
        this.state.activities = [...this.state, activity];
      }

      handleDoubleClick = () => {
        this.setState({
          editTabNameMode: true
        });
      };

      handleEditTabName = e => {
        const { currentTab, tabs } = this.state;

        const updatedTabs = tabs.map(tab => {
          if (tab.id === currentTab.id) {
            return {
              ...tab,
              name: e.target.value
            };
          } else {
            return tab;
          }
        });

        this.setState({
          tabs: updatedTabs,
          currentTab: {
            ...currentTab,
            name: e.target.value
          }
        });
      };

      handleOnBlur = () => {
        this.setState({
          editTabNameMode: false
        });
      };

      createTabs = () => {
        const { tabs, currentTab, editTabNameMode } = this.state;

        const allTabs = tabs.map(tab => {
          return (
            <li>
              {editTabNameMode && currentTab.id === tab.id ? (
                <input
                  value={tab.name}
                  onBlur={this.handleOnBlur}
                  onChange={this.handleEditTabName}
                />
              ) : (
                <button
                  className={currentTab.id === tab.id ? "tab active btn btn-primary" : "tab btn btn-primary"}
                  onClick={() => this.handleSelectTab(tab)}
                  onDoubleClick={() => this.handleDoubleClick(tab)}
                >
                  {tab.name}
                </button>
              )}
            </li>
          );
        });

        return <ul className="nav nav-tabs">{allTabs}</ul>;
      };

      handleSelectTab = tab => {
        this.setState({
          currentTab: tab,
          editMode: false,
          editTabNameMode: false
        });
      };

      handleAddTab = () => {
        const { tabs } = this.state;

        const newTabObject = {
          name: `Phase ${tabs.length + 1}`,
        };

        this.setState({
          tabs: [...tabs, newTabObject],
          currentTab: newTabObject,
          editMode: false,
          editTabNameMode: false
        });
      };

      handleDeleteTab = tabToDelete => {
        const { tabs } = this.state;
        if(tabs.length > 1){
          const tabToDeleteIndex = tabs.findIndex(tab => tab.id === tabToDelete.id);

        const updatedTabs = tabs.filter((tab, index) => {
          return index !== tabToDeleteIndex;
        });

        const previousTab =
          tabs[tabToDeleteIndex - 1] || tabs[tabToDeleteIndex + 1] || {};

        this.setState({
          tabs: updatedTabs,
          editMode: false,
          editTabNameMode: false,
          currentTab: previousTab
        });
        }

      };

      setEditMode = () => {
        this.setState({
          editMode: !this.state.editMode
        });
      };

      handleContentChange = e => {
        const { tabs, currentTab } = this.state;

        const updatedTabs = tabs.map(tab => {
          if (tab.name === currentTab.name) {
            return {
              ...tab,
            };
          } else {
            return tab;
          }
        });

        this.setState({
          tabs: updatedTabs,
          currentTab: {
            ...currentTab
          }
        });
      };

      render() {
        const { currentTab, editMode } = this.state;
        return (
          <div className="container">
          <h2>Iterations Plan</h2>
                        <h3>{this.state.currentTab.name}</h3>
            <div className="well">
              <button className="add-tab-button well-btn btn btn-primary" onClick={this.handleAddTab}>
                <i className="text-primary fas fa-plus-square" /> Add Tab
              </button>
              <button className="delete-tab-button well-btn btn btn-primary" onClick={() => this.handleDeleteTab(currentTab)}>
                          Delete current Phase
              </button>
              {this.createTabs()}
              <div className="tab-content">
                {editMode ? (
                  <div>

                    <button className="save-button btn btn-primary" onClick={this.setEditMode}>
                      Done
                    </button>
              </div>
            ) : (
                <div>
                  <p>{currentTab.content}</p>
                  {currentTab.id ? (
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                    </div>
                  ) : (
                      ""
                    )}
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default TabbedContainer;
