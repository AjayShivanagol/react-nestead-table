import 'react-table-6/react-table.css';
import './styles.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import ImageZoom from 'react-medium-image-zoom';
import _ from 'lodash';
import ControlButtons from "./ControlButtons";
import { Col, Container, Row } from 'react-bootstrap';
import ShowMore from 'react-show-more';
import $ from 'jquery'; 


const MIN_ROWS = 0;
const PAGE_SIZE = 5;
let selectedItemsListID = [];
let unSelectedItemsListID = [];

function uniqId() {
  return `${Date.now()}${(Math.random() * 10) | 0}`.substr(5);
}

/**
 * Get the width of text, used for adjusting column width on a table
 * @param {String} text the text that wants to get its width
 * @param {String} font the font style of current text
 * @returns {Number} the width (pixel)
 */
function getTextWidth(text, font = 'bold 18px sans-serif') {
  const minWidth = 25;
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return Math.max(metrics.width, minWidth);
}

function isArray(val) {
  return Array.isArray(val);
}

function isCheckbox(val, key) {
  return typeof val === 'boolean' && key === 'selected';
}

function isObject(val) {
  return val && typeof val === 'object' && val.constructor === Object;
}

function isImage(val) {
  if (typeof val !== 'string') {
    return false;
  }
  const fileExtension = val.split('.').pop();
  const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
  return IMAGE_EXTENSIONS.indexOf(fileExtension) > -1;
}

function isHtml(val) {
  return typeof val === 'string' && val.split('.').pop().includes('htm');
}

function getNatural(num) {
  return num ? parseFloat(num.toString().split('.')[0]) : '';
}

function getDecimal(num) {
  return num ? parseFloat(num.toString().split('.')[1]) : '';
}

// const copyData = this.props.data;
class ReactNestedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterChecked: false,
      allData: this.props.data,
      expanded: {},
      excludeColoumns: ['isMaster'],
      isItemsSelected: false,
      selectedItems: []
    };
    this.onCancelClick = this.onCancelClick.bind(this);
  }
  
  componentDidMount() {
    sessionStorage.setItem('selectedItemsListID', JSON.stringify([]));
  }

  onMasterCheckedHandle(data) {
    const isMaster = data.every((item) => {
      return item._original.isMaster === true;
    });
    return isMaster;
  }

  onCancelClick() {
    let templist = this.state.allData;
    templist = templist.map((item) => {
      item.selected = false;
      if (isObject(item)) {
        objectLoop(item);
        function objectLoop(item) {
          Object.keys(item).forEach((key) => {
            item.selected = false;
            item.isMaster = false;
            if (isObject(item[key])) {
              objectLoop(item[key]);
            }
            if (isArray(item[key])) {
              item[key].map((subItems) => {
                if (isObject(subItems)) {
                  objectLoop(subItems);
                }
              });
            }
          });
        }
      }
      return item;
    });

    this.setState({
      selectedItems: [],
      allData: templist,
      masterChecked: false
    });
  }

  onMasterCheck(isChecked, obj) {
    let tempSelectListId = [];
    tempSelectListId = JSON.parse(sessionStorage.getItem('selectedItemsListID'));
    let tempSelectedItem = this.state.selectedItems;
    console.log('ddddsssssssssddd------', isChecked, this.state.allData.length, tempSelectListId);
    let templist = this.state.allData;
    if (this.state.allData.length === obj.length) {
      templist = templist.map((item) => {
        item.selected = isChecked;

        // to store objId in array.
        if(isChecked) {
          console.log('tempSelectListId---------------', tempSelectListId.length);
          let isExisit = tempSelectListId.some((ID) => ID === item.ID);
          console.log('isExisitisExisitisExisitisExisit', isExisit);
          if (!isExisit) {
            tempSelectListId.push(item.ID);
            unSelectedItemsListID = [];
          }
        } else {
          tempSelectListId = tempSelectListId?.filter((ID) => {
            return ID != item.ID;
          });
          unSelectedItemsListID.push(item.ID);
        }

        if (isObject(item)) {
          objectLoop(item);
          function objectLoop(item) {
            Object.keys(item).forEach((key) => {
              item.selected = isChecked;
              item.isMaster = isChecked;

              // to store objId in array.
              if(isChecked) {
                let isExisit = tempSelectListId.some((ID) => ID === item.ID);
                if (!isExisit) {
                  tempSelectListId.push(item.ID);
                }
              } else {
                tempSelectListId = tempSelectListId?.filter((ID) => {
                  return ID != item.ID;
                });
              }

              if (isObject(item[key])) {
                objectLoop(item[key]);
              }
              if (isArray(item[key])) {
                item[key].map((subItems) => {
                  if (isObject(subItems)) {
                    objectLoop(subItems);
                  }
                });
              }
            });
          }
        }

        // To store the values of selected items.
        if (isChecked) {
          let isExisit = tempSelectListId.some((ID) => ID === item.ID);
          if(!isExisit) {
            tempSelectedItem.push(item);
          }
        } else {
          tempSelectedItem = [];
        }
        return item;
      });
    } else {
      obj.forEach((objItem) => {
        console.log('onMasterCheck------', objItem._original);
        objItem._original.selected = isChecked;
        objItem._original.isMaster = isChecked;

                      // to store objId in array.
                      if(isChecked) {
                        let isExisit = tempSelectListId.some((ID) => ID ===  objItem._original.ID);
                        console.log('xxxxxxxxxxxxxxxxxxxxxx', isExisit);
                        if (!isExisit) {
                          tempSelectListId.push(objItem._original.ID);
                          unSelectedItemsListID = unSelectedItemsListID?.filter((ID) => {
                            return ID !=  objItem._original.ID;
                          });
                        }
                      } else {
                        tempSelectListId = tempSelectListId?.filter((ID) => {
                          return ID !=  objItem._original.ID;
                        });
                          unSelectedItemsListID.push(objItem._original.ID);
                      }

        objectLoop(objItem._original);
        function objectLoop(item) {
          item.selected = isChecked;
          item.isMaster = isChecked;

                                // to store objId in array.
                                if(isChecked) {
                                  let isExisit = tempSelectListId.some((ID) => ID === item.ID);
                                    console.log('xxxxxxxxxxxxxxxxxxxxxx11111', isExisit);
                                  if (!isExisit) {
                                    tempSelectListId.push(item.ID);
                                    unSelectedItemsListID = unSelectedItemsListID?.filter((ID) => {
                                      return ID != item.ID;
                                    });
                                  }
                                } else {
                                  tempSelectListId = tempSelectListId?.filter((ID) => {
                                    return ID != item.ID;
                                  });
                                   unSelectedItemsListID.push(item.ID);        
                                }

          Object.keys(item).forEach((key) => {
            if (isObject(item[key])) {
              objectLoop(item[key]);
            }
            if (isArray(item[key])) {
              item[key].map((subItems) => {
                if (isObject(subItems)) {
                  objectLoop(subItems);
                }
              });
            }
          });
        }
        // to store selected items in an array.
        const ID = getNatural(objItem._original.ID);
        if (isChecked) {
          const selectedItems = templist.filter((o) => o.ID === ID);
          let isExisit = tempSelectedItem.some((o) => o.ID === ID);
          if (!isExisit) {
            tempSelectedItem.push(...selectedItems);
          }
        } else {
          // to remove selected items.
          tempSelectedItem = tempSelectedItem?.filter((el) => {
            return el.ID != ID;
          });
        }
      });
    }

    
    sessionStorage.setItem('selectedItemsListID', JSON.stringify(tempSelectListId));
    console.log('tempSelectedItem----------------------', tempSelectedItem);

    console.log('tempSelectListIdtempSelectListId----------------------', tempSelectListId);
    console.log('unSelectedItemsListIDunSelectedItemsListIDrrrrrrrrr----------------------', unSelectedItemsListID);

    this.state.selectedItems = tempSelectedItem;
    this.state.allData = templist;
    this.jequeryCheckbox()
    // this.setState({
    //   selectedItems: tempSelectedItem,
    //   masterChecked: isChecked,
    //   allData: templist
    // });
  }

  onItemCheck(isChecked, obj) {
    let tempSelectListId = JSON.parse(sessionStorage.getItem('selectedItemsListID')) || [];
    let tempSelectedItem = this.state.selectedItems;
    let templist = this.state.allData;
    templist = templist.map((item) => {
      if (item.ID === obj.ID) {
        objectLoop(item);
        function objectLoop(item) {
          Object.keys(item).forEach((key) => {
            item.selected = isChecked;
            item.isMaster = isChecked;

            // to store selected ID's in list.
            if(isChecked) {
              let isExisit = tempSelectListId.some((ID) => ID === item.ID);
              if (!isExisit) {
                tempSelectListId.push(item.ID);
                unSelectedItemsListID = unSelectedItemsListID?.filter((ID) => {
                  return ID !=  item.ID;
                });
              }
            } else {
              tempSelectListId = tempSelectListId?.filter((ID) => {
                return ID != item.ID;
              });
              unSelectedItemsListID.push(item.ID);
            }

            // TO store the values of selected items.
            if (isChecked) {
              let insertUniqueObject = function (arr, obj) {
                let isExisit = arr.some((o) => o.ID === obj.ID);
                if (!isExisit) {
                  tempSelectedItem.push(obj);
                }
                return arr;
              };
              insertUniqueObject(tempSelectedItem, obj);
            } else {
              // to remove selected items.
              tempSelectedItem = tempSelectedItem?.filter((el) => {
                return el.ID != obj.ID;
              });
            }
            if (isObject(item[key])) {
              objectLoop(item[key]);
            }
            // if the subitem is an array
            if (isArray(item[key])) {
              item[key].map((subItems) => {
                if (isObject(subItems)) {
                  objectLoop(subItems);
                }
              });
            }
          });
        }
        return { ...item, selected: isChecked };
      } else {
        if (item.ID === getNatural(obj.ID)) {
          objectLoop(item);
          function objectLoop(item) {
            Object.keys(item).forEach((key) => {
              if (item.ID === obj.ID) {
                item.selected = isChecked;

                    // to store selected ID's in list.
                    if(isChecked) {
                      let isExisit = tempSelectListId.some((ID) => ID === item.ID);
                      if (!isExisit) {
                        tempSelectListId.push(item.ID);
                        unSelectedItemsListID = unSelectedItemsListID?.filter((ID) => {
                          return ID !=  item.ID;
                        });
                      }
                    } else {
                      tempSelectListId = tempSelectListId?.filter((ID) => {
                        return ID != item.ID;
                      });
                      unSelectedItemsListID.push(item.ID);
                    }
              }
              if (isObject(item[key])) {
                objectLoop(item[key]);
              }
              // if the subitem is an array
              if (isArray(item[key])) {
                item[key].map((subItems) => {
                  if (isObject(subItems)) {
                    objectLoop(subItems);
                  }
                });
              }
            });
          }
          // To store the values of selected items.
          if (isChecked) {
            let insertUniqueObject = function (arr, obj) {
              let isExisit = arr.some((o) => o.ID === obj.ID);
              if (!isExisit) {
                tempSelectedItem.push(obj);
              }
              return arr;
            };
            insertUniqueObject(tempSelectedItem, obj);
          } else {
            tempSelectedItem = tempSelectedItem?.filter((el) => {
              return el.ID != obj.ID;
            });
          }
        }
      }
      return item;
    });

    sessionStorage.setItem('selectedItemsListID', JSON.stringify(tempSelectListId));
    console.log('tempSelectListId================-ssss---------------------', tempSelectListId);
    console.log('selectedItemsListID-ssss---------------------', selectedItemsListID);
    console.log('wwwwwwwwwwwwwwww', tempSelectedItem);
    this.state.selectedItems = tempSelectedItem;
    this.state.allData = templist;
    console.log('this.state.allDatafffffffff---------------------', this.state.allData);


    this.jequeryCheckbox()
    // this.setState({
    //   selectedItems: tempSelectedItem,
    //   allData: templist
    // });
  }

  jequeryCheckbox() {
    const tempSelectListId = JSON.parse(sessionStorage.getItem('selectedItemsListID')) || [];
    console.log('tempSelectListId2222222222222------', tempSelectListId);
    console.log('unSelectedItemsListID2222222222222------', unSelectedItemsListID);
    $(document).ready(function(){
      if(tempSelectListId.length > 0) {
        tempSelectListId.map(ID => {
            return $('input[type=checkbox][ID="'+String(ID)+'"]').prop('checked', true);
        });
      } else {
        $('input[type=checkbox]').prop('checked', false);
      }
      if(unSelectedItemsListID.length > 0) {
        unSelectedItemsListID.map(ID => {
        return $('input[type=checkbox][ID="'+String(ID)+'"]').prop('checked', false);
        });
      }
  })
  }

  /**
   * Transfer data to columns that is used for rendering table
   * @param {Array} data
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
   * @param {Array} data
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
   * @param {Array} data
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
   * @param {Array} data
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
   * @param {Array} data
   * @param {Array} data
     * @param {Array} data 
   * @param {Array} data
   * @param {Array} data
   * @returns {Array} an array of columns configuration
   */
  dataToColumns(data, keyMaps, onCellDisplay, currentExpandedKeys) {
    if (data && data.length) {
      const dataModel = data[0];

      return Object.keys(dataModel).map((key) => {
        const currentData = dataModel[key];
        const defaultColumn = {
          Header: keyMaps[key] || key,
          accessor: key,
          style: { whiteSpace: 'unset' },
          // width: getTextWidth(key),
          Cell: ({ ...rowInfo }) => (
            <div>
              <ShowMore lines={1} more='more' less='less' widh={'150px'}>
                {rowInfo.original[key]}
              </ShowMore>
            </div>
          )
        };

        // To hide coloumns which are not required.
        if (this.state.excludeColoumns.includes(key)) {
          return {
            show: false
          };
        }

        if (isCheckbox(currentData, key)) {
          return {
            sortable: false,
            Header: (obj) => (
              <input
                type='checkbox'
                ID = {obj.data.ID}
                onChange={(e) => this.onMasterCheck(e.target.checked, obj.data)}
                // checked={this.onMasterCheckedHandle(obj.data)}
              />
            ),
            width: 65,
            ID: key,
            Cell: ({ ...rowInfo }) => (
              <div>
                <input
                  type='checkbox'
                  ID={rowInfo.original.ID}
                  onChange={(e) => this.onItemCheck(e.target.checked, rowInfo.original)}
                  // checked={rowInfo.original.selected}
                />
              </div>
            ),
            style: {
              cursor: 'pointer',
              textAlign: 'center'
            }
          };
        }

        if (
          isObject(currentData) ||
          isArray(currentData) ||
          isHtml(currentData)
        ) {
          return {
            expander: true,
            Header: () => <strong>{keyMaps[key] || key}</strong>,
            width: 65,
            ID: key,
            Expander: ({ isExpanded, ...rowInfo }) => (
              <div>
                {isExpanded && currentExpandedKeys[rowInfo.index] === key ? (
                  <span>&#x2299;</span>
                ) : (
                  <span>&#x2295;</span>
                )}
              </div>
            ),
            style: {
              cursor: 'pointer',
              fontSize: 25,
              padding: '0',
              textAlign: 'center',
              userSelect: 'none'
            }
          };
        }

        if (onCellDisplay) {
          const column = onCellDisplay(key, currentData);
          if (column) {
            return Object.assign({}, defaultColumn, column);
          }
        }

        if (isImage(currentData)) {
          return Object.assign({}, defaultColumn, {
            Cell: (cellData) => (
              <ImageZoom
                image={{
                  src: cellData.original[key],
                  alt: key,
                  className: 'image'
                }}
              />
            )
          });
        }

        return defaultColumn;
      });
    }
    return [{ Header: 'ID', accessor: 'ID' }];
  }

  /**
   * Render a table/iframe/list based on data
   * It will automatically change UI by the types of data
   * @param {Array/Object/String} data data needs to be rendered
   */
  renderByData(data, keyMaps, onCellDisplay) {
    if (!data) {
      return null;
    }

    if (isHtml(data)) {
      return <iframe src={data} style={{ height: '50vh', width: '100%' }} />;
    }

    if (isObject(data)) {
      data = [data];
    }

    if (isArray(data)) {
      const dataModel = data[0];

      // used for storing expanding keys in different rows
      let currentExpandedKeys = {};

      // render as a list if there is only String or Number in Array
      if (!isObject(dataModel) && !isArray(dataModel)) {
        return (
          <ul>
            {data.map((item, i) => (
              <li key={`nested_table_${i}`}>{item}</li>
            ))}
          </ul>
        );
      }

      const columns = this.dataToColumns(
        data,
        keyMaps,
        onCellDisplay,
        currentExpandedKeys
      );

      return (
        <ReactTable
          data={data}
          columns={columns}
          className='-striped -highlight'
          minRows={0}
          defaultPageSize={PAGE_SIZE}
          showPagination={data && data.length > PAGE_SIZE ? true : false}
          // expanded={this.state.expanded}
          SubComponent={(row) => {
            // get current active key which needs to be expanded (triggered by clicking on a td element)
            const currentExpandedKey = currentExpandedKeys[row.index];
            let coloumnData = [];
            console.log(
              'currentExpandedKey------------------',
              currentExpandedKey,
              this.state.expanded
            );
            console.log('coloumnData------------------', coloumnData);
            this.jequeryCheckbox();

            return (
              <div className='react-nested-table-inner'>
                <h4 className='title'>
                  {keyMaps[currentExpandedKey] || currentExpandedKey}
                </h4>
                {this.renderByData(
                  row.original[currentExpandedKey],
                  keyMaps,
                  onCellDisplay
                )}
              </div>
            );
          }}
          // onExpandedChange={(newExpanded, index, event) => {console.log('onExpand', newExpanded, index, event)}}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                // used to identify which column is expanding
                if (column.expander) {
                  currentExpandedKeys[rowInfo.index] = column.ID;
                }

                console.log('currentExpandedKeys------', currentExpandedKeys);

                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
                  handleOriginal();
                }
              }
            };
          }}
        />
      );
    }
  }

  render() {
    return (
      <>
        <br />
        <Container>
          <Row>
            <Col xs={{ order: 'first' }}></Col>
            <Col xs>
              <ControlButtons
                selectedItems={this.state.selectedItems}
              selectedItems={this.state.selectedItems} 
                selectedItems={this.state.selectedItems}
              selectedItems={this.state.selectedItems} 
                selectedItems={this.state.selectedItems}
                onCancelClick={this.onCancelClick}
              />
            </Col>
            <Col xs={{ order: 'last' }}></Col>
          </Row>
        </Container>
        <br />
        {this.renderByData(
          this.state.allData,
          this.props.headersMap,
          this.props.onCellDisplay
        )}
      </>
    );
  }
}

ReactNestedTable.defaultProps = {
  data: [],
  headersMap: {}
};

ReactNestedTable.propTypes = {
  /**
   * data, should be a json
   */
  data: PropTypes.array.isRequired,
  /**
   *  Mapping between data key and column header title for display
   */
  headersMap: PropTypes.object,
  onCellDisplay: PropTypes.func
};

export default ReactNestedTable;