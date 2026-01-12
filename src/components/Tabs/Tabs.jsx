import React from 'react';

export const Tabs = ({ tabs, activeTab, isActiveTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={activeTab === index ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => isActiveTab(index)}
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
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
