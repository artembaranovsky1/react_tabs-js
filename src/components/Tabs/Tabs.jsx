import React from 'react';

export const Tabs = ({ tabs, activeTab, isActiveTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={activeTab === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => isActiveTab(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}

          {/* <li className="is-active" data-cy="Tab"> */}
          {/*  <a href="#tab-1" data-cy="TabLink"> */}
          {/*    Tab 1 */}
          {/*  </a> */}
          {/* </li> */}

          {/* <li data-cy="Tab"> */}
          {/*  <a href="#tab-2" data-cy="TabLink"> */}
          {/*    Tab 2 */}
          {/*  </a> */}
          {/* </li> */}

          {/* <li data-cy="Tab"> */}
          {/*  <a href="#tab-3" data-cy="TabLink"> */}
          {/*    Tab 3 */}
          {/*  </a> */}
          {/* </li> */}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTab).content}
      </div>
    </div>
  );
};
