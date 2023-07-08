import React from 'react'

const HomeFurniture = () => {
  return (
   <>
    <section id="prod-page-scroll" className="product-listing-main flex-full">
      <div className="container">
        <div className="product-listing-main-wrapper flex-full align-items-start align-content-start">
          <aside className="filter-area flex-full">
            <div className="filter-box category-block flex-full">
              <h2>Categories</h2>
              <div className="category-box flex-full">
                <div className="accordion-tab">
                  <h3 className="accordion-title" onClick={() => onCategoryChange('bangalore', 'home-furniture-rental', 'p')}>
                    Home Furniture
                    <i className="icn icn-arrow-bottom"></i>
                  </h3>
                  <div className="accordion-content" style={{ display: 'none' }}>
                    <div className="accordion-body">
                      <div className="radio-grp product">
                        <a href="bangalore/bedroom-furniture-on-rent" className="sort-cat cat-sort">
                          <h2>Bed Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/living-room-furniture-on-rent" className="sort-cat cat-sort">
                          <h2>Living Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/dining-furniture-on-rent" className="sort-cat cat-sort">
                          <h2>Dining Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/study-room-furniture-rental" className="sort-cat cat-sort">
                          <h2>Study Room</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="accordion-tab current">
                  <h3 className="accordion-title" onClick={() => onCategoryChange('bangalore', 'home-appliances-rental', 'p')}>
                    Appliances
                    <i className="icn icn-arrow-bottom"></i>
                  </h3>
                  <div className="accordion-content" style={{ display: 'none' }}>
                    <div className="accordion-body">
                      <div className="radio-grp product">
                        <a href="bangalore/refrigerator-rentals" className="sort-cat cat-sort">
                          <h2>Refrigerator</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/water-purifier" className="sort-cat cat-sort">
                          <h2>Water Purifier</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/air-conditioners-1" className="sort-cat cat-sort">
                          <h2>Air Conditioners</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/washing-machine-rentals" className="sort-cat cat-sort">
                          <h2>Washing Machine</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/tv-rentals" className="sort-cat cat-sort">
                          <h2>Television</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/other-appliances" className="sort-cat cat-sort">
                          <h2>Other Appliances</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="accordion-tab">
                  <h3 className="accordion-title" onClick={() => onCategoryChange('bangalore', 'office-furniture-rent', 'p')}>
                    Office Furniture
                    <i className="icn icn-arrow-bottom"></i>
                  </h3>
                  <div className="accordion-content" style={{}}>
                    <div className="accordion-body">
                      <div className="radio-grp product">
                        <a href="bangalore/workstations" className="sort-cat cat-sort">
                          <h2>Workstations</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/office-chair" className="sort-cat cat-sort">
                          <h2>Office Chair</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="accordion-tab">
                  <h3 className="accordion-title" onClick={() => onCategoryChange('bangalore', 'furniture-rental-packages', 'p')}>
                    Combos
                    <i className="icn icn-arrow-bottom"></i>
                  </h3>
                  <div className="accordion-content" style={{}}>
                    <div className="accordion-body">
                      <div className="radio-grp product">
                        <a href="bangalore/bedroom" className="sort-cat cat-sort">
                          <h2>Bed Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/living-room" className="sort-cat cat-sort">
                          <h2>Living Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/dining-room" className="sort-cat cat-sort">
                          <h2>Dining Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/study-room" className="sort-cat cat-sort">
                          <h2>Study Room</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/appliances" className="sort-cat cat-sort">
                          <h2>Appliances</h2>
                        </a>
                      </div>
                      <div className="radio-grp product">
                        <a href="bangalore/value-combos" className="sort-cat cat-sort">
                          <h2>Value Combos</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="accordion-tab">
                  <h3 className="accordion-title" onClick={() => onCategoryChange('bangalore', 'clearance-sale', 'p')}>
                    Furniture Sale
                    <i className="icn icn-arrow-bottom"></i>
                  </h3>
                  <div className="accordion-content" style={{}}>
                    <div className="accordion-body">
                      {/* No radio buttons or labels */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
  
          {/* Other components and content */}
  
        </div>
      </div>
      </section>
   
   
   </>
  )
}

export default HomeFurniture