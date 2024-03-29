/*!
 * Ext JS Library 3.4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
/**
 * @class Ext.grid.Column
 * <p>This class encapsulates column configuration data to be used in the initialization of a
 * {@link Ext.grid.ColumnModel ColumnModel}.</p>
 * <p>While subclasses are provided to render data in different ways, this class renders a passed
 * data field unchanged and is usually used for textual columns.</p>
 */
Ext.grid.Column = Ext.extend(Ext.util.Observable, {
    /**
     * @cfg {Boolean} editable Optional. Defaults to <tt>true</tt>, enabling the configured
     * <tt>{@link #editor}</tt>.  Set to <tt>false</tt> to initially disable editing on this column.
     * The initial configuration may be dynamically altered using
     * {@link Ext.grid.ColumnModel}.{@link Ext.grid.ColumnModel#setEditable setEditable()}.
     */
    /**
     * @cfg {String} id Optional. A name which identifies this column (defaults to the column's initial
     * ordinal position.) The <tt>id</tt> is used to create a CSS <b>class</b> name which is applied to all
     * table cells (including headers) in that column (in this context the <tt>id</tt> does not need to be
     * unique). The class name takes the form of <pre>x-grid3-td-<b>id</b></pre>
     * Header cells will also receive this class name, but will also have the class <pre>x-grid3-hd</pre>
     * So, to target header cells, use CSS selectors such as:<pre>.x-grid3-hd-row .x-grid3-td-<b>id</b></pre>
     * The {@link Ext.grid.GridPanel#autoExpandColumn} grid config option references the column via this
     * unique identifier.
     */
    /**
     * @cfg {String} header Optional. The header text to be used as innerHTML
     * (html tags are accepted) to display in the Grid view.  <b>Note</b>: to
     * have a clickable header with no text displayed use <tt>'&amp;#160;'</tt>.
     */
    /**
     * @cfg {Boolean} groupable Optional. If the grid is being rendered by an {@link Ext.grid.GroupingView}, this option
     * may be used to disable the header menu item to group by the column selected. Defaults to <tt>true</tt>,
     * which enables the header menu group option.  Set to <tt>false</tt> to disable (but still show) the
     * group option in the header menu for the column. See also <code>{@link #groupName}</code>.
     */
    /**
     * @cfg {String} groupName Optional. If the grid is being rendered by an {@link Ext.grid.GroupingView}, this option
     * may be used to specify the text with which to prefix the group field value in the group header line.
     * See also {@link #groupRenderer} and
     * {@link Ext.grid.GroupingView}.{@link Ext.grid.GroupingView#showGroupName showGroupName}.
     */
    /**
     * @cfg {Function} groupRenderer <p>Optional. If the grid is being rendered by an {@link Ext.grid.GroupingView}, this option
     * may be used to specify the function used to format the grouping field value for display in the group
     * {@link #groupName header}.  If a <tt><b>groupRenderer</b></tt> is not specified, the configured
     * <tt><b>{@link #renderer}</b></tt> will be called; if a <tt><b>{@link #renderer}</b></tt> is also not specified
     * the new value of the group field will be used.</p>
     * <p>The called function (either the <tt><b>groupRenderer</b></tt> or <tt><b>{@link #renderer}</b></tt>) will be
     * passed the following parameters:
     * <div class="mdetail-params"><ul>
     * <li><b>v</b> : Object<p class="sub-desc">The new value of the group field.</p></li>
     * <li><b>unused</b> : undefined<p class="sub-desc">Unused parameter.</p></li>
     * <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data
     * for the row which caused group change.</p></li>
     * <li><b>rowIndex</b> : Number<p class="sub-desc">The row index of the Record which caused group change.</p></li>
     * <li><b>colIndex</b> : Number<p class="sub-desc">The column index of the group field.</p></li>
     * <li><b>ds</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul></div></p>
     * <p>The function should return a string value.</p>
     */
    /**
     * @cfg {String} emptyGroupText Optional. If the grid is being rendered by an {@link Ext.grid.GroupingView}, this option
     * may be used to specify the text to display when there is an empty group value. Defaults to the
     * {@link Ext.grid.GroupingView}.{@link Ext.grid.GroupingView#emptyGroupText emptyGroupText}.
     */
    /**
     * @cfg {String} dataIndex <p><b>Required</b>. The name of the field in the
     * grid's {@link Ext.data.Store}'s {@link Ext.data.Record} definition from
     * which to draw the column's value.</p>
     */
    /**
     * @cfg {Number} width
     * Optional. The initial width in pixels of the column.
     * The width of each column can also be affected if any of the following are configured:
     * <div class="mdetail-params"><ul>
     * <li>{@link Ext.grid.GridPanel}.<tt>{@link Ext.grid.GridPanel#autoExpandColumn autoExpandColumn}</tt></li>
     * <li>{@link Ext.grid.GridView}.<tt>{@link Ext.grid.GridView#forceFit forceFit}</tt>
     * <div class="sub-desc">
     * <p>By specifying <tt>forceFit:true</tt>, {@link #fixed non-fixed width} columns will be
     * re-proportioned (based on the relative initial widths) to fill the width of the grid so
     * that no horizontal scrollbar is shown.</p>
     * </div></li>
     * <li>{@link Ext.grid.GridView}.<tt>{@link Ext.grid.GridView#autoFill autoFill}</tt></li>
     * <li>{@link Ext.grid.GridPanel}.<tt>{@link Ext.grid.GridPanel#minColumnWidth minColumnWidth}</tt></li>
     * <br><p><b>Note</b>: when the width of each column is determined, a space on the right side
     * is reserved for the vertical scrollbar.  The
     * {@link Ext.grid.GridView}.<tt>{@link Ext.grid.GridView#scrollOffset scrollOffset}</tt>
     * can be modified to reduce or eliminate the reserved offset.</p>
     */
    /**
     * @cfg {Boolean} sortable Optional. <tt>true</tt> if sorting is to be allowed on this column.
     * Defaults to the value of the <code>{@link Ext.grid.ColumnModel#defaultSortable}</code> property.
     * Whether local/remote sorting is used is specified in <code>{@link Ext.data.Store#remoteSort}</code>.
     */
    /**
     * @cfg {Boolean} fixed Optional. <tt>true</tt> if the column width cannot be changed.  Defaults to <tt>false</tt>.
     */
    /**
     * @cfg {Boolean} resizable Optional. <tt>false</tt> to disable column resizing. Defaults to <tt>true</tt>.
     */
    /**
     * @cfg {Boolean} menuDisabled Optional. <tt>true</tt> to disable the column menu. Defaults to <tt>false</tt>.
     */
    /**
     * @cfg {Boolean} hidden
     * Optional. <tt>true</tt> to initially hide this column. Defaults to <tt>false</tt>.
     * A hidden column {@link Ext.grid.GridPanel#enableColumnHide may be shown via the header row menu}.
     * If a column is never to be shown, simply do not include this column in the Column Model at all.
     */
    /**
     * @cfg {String} tooltip Optional. A text string to use as the column header's tooltip.  If Quicktips
     * are enabled, this value will be used as the text of the quick tip, otherwise it will be set as the
     * header's HTML title attribute. Defaults to ''.
     */
    /**
     * @cfg {Mixed} renderer
     * <p>For an alternative to specifying a renderer see <code>{@link #xtype}</code></p>
     * <p>Optional. A renderer is an 'interceptor' method which can be used transform data (value,
     * appearance, etc.) before it is rendered). This may be specified in either of three ways:
     * <div class="mdetail-params"><ul>
     * <li>A renderer function used to return HTML markup for a cell given the cell's data value.</li>
     * <li>A string which references a property name of the {@link Ext.util.Format} class which
     * provides a renderer function.</li>
     * <li>An object specifying both the renderer function, and its execution scope (<tt><b>this</b></tt>
     * reference) e.g.:<pre style="margin-left:1.2em"><code>
{
    fn: this.gridRenderer,
    scope: this
}
</code></pre></li></ul></div>
     * If not specified, the default renderer uses the raw data value.</p>
     * <p>For information about the renderer function (passed parameters, etc.), see
     * {@link Ext.grid.ColumnModel#setRenderer}. An example of specifying renderer function inline:</p><pre><code>
var companyColumn = {
   header: 'Company Name',
   dataIndex: 'company',
   renderer: function(value, metaData, record, rowIndex, colIndex, store) {
      // provide the logic depending on business rules
      // name of your own choosing to manipulate the cell depending upon
      // the data in the underlying Record object.
      if (value == 'whatever') {
          //metaData.css : String : A CSS class name to add to the TD element of the cell.
          //metaData.attr : String : An html attribute definition string to apply to
          //                         the data container element within the table
          //                         cell (e.g. 'style="color:red;"').
          metaData.css = 'name-of-css-class-you-will-define';
      }
      return value;
   }
}
     * </code></pre>
     * See also {@link #scope}.
     */
    /**
     * @cfg {String} xtype Optional. A String which references a predefined {@link Ext.grid.Column} subclass
     * type which is preconfigured with an appropriate <code>{@link #renderer}</code> to be easily
     * configured into a ColumnModel. The predefined {@link Ext.grid.Column} subclass types are:
     * <div class="mdetail-params"><ul>
     * <li><b><tt>gridcolumn</tt></b> : {@link Ext.grid.Column} (<b>Default</b>)<p class="sub-desc"></p></li>
     * <li><b><tt>booleancolumn</tt></b> : {@link Ext.grid.BooleanColumn}<p class="sub-desc"></p></li>
     * <li><b><tt>numbercolumn</tt></b> : {@link Ext.grid.NumberColumn}<p class="sub-desc"></p></li>
     * <li><b><tt>datecolumn</tt></b> : {@link Ext.grid.DateColumn}<p class="sub-desc"></p></li>
     * <li><b><tt>templatecolumn</tt></b> : {@link Ext.grid.TemplateColumn}<p class="sub-desc"></p></li>
     * </ul></div>
     * <p>Configuration properties for the specified <code>xtype</code> may be specified with
     * the Column configuration properties, for example:</p>
     * <pre><code>
var grid = new Ext.grid.GridPanel({
    ...
    columns: [{
        header: 'Last Updated',
        dataIndex: 'lastChange',
        width: 85,
        sortable: true,
        //renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        xtype: 'datecolumn', // use xtype instead of renderer
        format: 'M/d/Y' // configuration property for {@link Ext.grid.DateColumn}
    }, {
        ...
    }]
});
     * </code></pre>
     */
    /**
     * @cfg {Object} scope Optional. The scope (<tt><b>this</b></tt> reference) in which to execute the
     * renderer.  Defaults to the Column configuration object.
     */
    /**
     * @cfg {String} align Optional. Set the CSS text-align property of the column.  Defaults to undefined.
     */
    /**
     * @cfg {String} css Optional. An inline style definition string which is applied to all table cells in the column
     * (excluding headers). Defaults to undefined.
     */
    /**
     * @cfg {Boolean} hideable Optional. Specify as <tt>false</tt> to prevent the user from hiding this column
     * (defaults to true).  To disallow column hiding globally for all columns in the grid, use
     * {@link Ext.grid.GridPanel#enableColumnHide} instead.
     */
    /**
     * @cfg {Ext.form.Field} editor Optional. The {@link Ext.form.Field} to use when editing values in this column
     * if editing is supported by the grid. See <tt>{@link #editable}</tt> also.
     */

    /**
     * @private
     * @cfg {Boolean} isColumn
     * Used by ColumnModel setConfig method to avoid reprocessing a Column
     * if <code>isColumn</code> is not set ColumnModel will recreate a new Ext.grid.Column
     * Defaults to true.
     */
    isColumn : true,

    constructor : function(config){
        Ext.apply(this, config);

        if(Ext.isString(this.renderer)){
            this.renderer = Ext.util.Format[this.renderer];
        }else if(Ext.isObject(this.renderer)){
            this.scope = this.renderer.scope;
            this.renderer = this.renderer.fn;
        }
        if(!this.scope){
            this.scope = this;
        }

        var ed = this.editor;
        delete this.editor;
        this.setEditor(ed);
        this.addEvents(
            /**
             * @event click
             * Fires when this Column is clicked.
             * @param {Column} this
             * @param {Grid} The owning GridPanel
             * @param {Number} rowIndex
             * @param {Ext.EventObject} e
             */
            'click',
            /**
             * @event contextmenu
             * Fires when this Column is right clicked.
             * @param {Column} this
             * @param {Grid} The owning GridPanel
             * @param {Number} rowIndex
             * @param {Ext.EventObject} e
             */
            'contextmenu',
            /**
             * @event dblclick
             * Fires when this Column is double clicked.
             * @param {Column} this
             * @param {Grid} The owning GridPanel
             * @param {Number} rowIndex
             * @param {Ext.EventObject} e
             */
            'dblclick',
            /**
             * @event mousedown
             * Fires when this Column receives a mousedown event.
             * @param {Column} this
             * @param {Grid} The owning GridPanel
             * @param {Number} rowIndex
             * @param {Ext.EventObject} e
             */
            'mousedown'
        );
        Ext.grid.Column.superclass.constructor.call(this);
    },

    /**
     * @private
     * Process and refire events routed from the PayLoad's processEvent method.
     * Returns the event handler's status to allow cancelling of PayLoad's bubbling process.
     */
    processEvent : function(name, e, grid, rowIndex, colIndex){
        return this.fireEvent(name, this, grid, rowIndex, e);
    },

    /**
     * @private
     * Clean up. Remove any Editor. Remove any listeners.
     */
    destroy: function() {
        if(this.setEditor){
            this.setEditor(null);
        }
        this.purgeListeners();
    },

    /**
     * Optional. A function which returns displayable data when passed the following parameters:
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Object<p class="sub-desc">The data value for the cell.</p></li>
     * <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     * <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     * <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container
     * element <i>within</i> the table cell (e.g. 'style="color:red;"').</p></li></ul></p></li>
     * <li><b>record</b> : Ext.data.record<p class="sub-desc">The {@link Ext.data.Record} from which the data was
     * extracted.</p></li>
     * <li><b>rowIndex</b> : Number<p class="sub-desc">Row index</p></li>
     * <li><b>colIndex</b> : Number<p class="sub-desc">Column index</p></li>
     * <li><b>store</b> : Ext.data.Store<p class="sub-desc">The {@link Ext.data.Store} object from which the Record
     * was extracted.</p></li>
     * </ul></div>
     * @property renderer
     * @type Function
     */
    renderer : function(value){
        return value;
    },

    // private
    getEditor: function(rowIndex){
        return this.editable !== false ? this.editor : null;
    },

    /**
     * Sets a new editor for this column.
     * @param {Ext.Editor/Ext.form.Field} editor The editor to set
     */
    setEditor : function(editor){
        var ed = this.editor;
        if(ed){
            if(ed.gridEditor){
                ed.gridEditor.destroy();
                delete ed.gridEditor;
            }else{
                ed.destroy();
            }
        }
        this.editor = null;
        if(editor){
            //not an instance, create it
            if(!editor.isXType){
                editor = Ext.create(editor, 'textfield');
            }
            this.editor = editor;
        }
    },

    /**
     * Returns the {@link Ext.Editor editor} defined for this column that was created to wrap the {@link Ext.form.Field Field}
     * used to edit the cell.
     * @param {Number} rowIndex The row index
     * @return {Ext.Editor}
     */
    getCellEditor: function(rowIndex){
        var ed = this.getEditor(rowIndex);
        if(ed){
            if(!ed.startEdit){
                if(!ed.gridEditor){
                    ed.gridEditor = new Ext.grid.GridEditor(ed);
                }
                ed = ed.gridEditor;
            }
        }
        return ed;
    }
});

/**
 * @class Ext.grid.BooleanColumn
 * @extends Ext.grid.Column
 * <p>A Column definition class which renders boolean data fields.  See the {@link Ext.grid.Column#xtype xtype}
 * config option of {@link Ext.grid.Column} for more details.</p>
 */
Ext.grid.BooleanColumn = Ext.extend(Ext.grid.Column, {
    /**
     * @cfg {String} trueText
     * The string returned by the renderer when the column value is not falsy (defaults to <tt>'true'</tt>).
     */
    trueText: 'true',
    /**
     * @cfg {String} falseText
     * The string returned by the renderer when the column value is falsy (but not undefined) (defaults to
     * <tt>'false'</tt>).
     */
    falseText: 'false',
    /**
     * @cfg {String} undefinedText
     * The string returned by the renderer when the column value is undefined (defaults to <tt>'&amp;#160;'</tt>).
     */
    undefinedText: '&#160;',

    constructor: function(cfg){
        Ext.grid.BooleanColumn.superclass.constructor.call(this, cfg);
        var t = this.trueText, f = this.falseText, u = this.undefinedText;
        this.renderer = function(v){
            if(v === undefined){
                return u;
            }
            if(!v || v === 'false'){
                return f;
            }
            return t;
        };
    }
});

/**
 * @class Ext.grid.NumberColumn
 * @extends Ext.grid.Column
 * <p>A Column definition class which renders a numeric data field according to a {@link #format} string.  See the
 * {@link Ext.grid.Column#xtype xtype} config option of {@link Ext.grid.Column} for more details.</p>
 */
Ext.grid.NumberColumn = Ext.extend(Ext.grid.Column, {
    /**
     * @cfg {String} format
     * A formatting string as used by {@link Ext.util.Format#number} to format a numeric value for this Column
     * (defaults to <tt>'0,000.00'</tt>).
     */
    format : '0,000.00',
    constructor: function(cfg){
        Ext.grid.NumberColumn.superclass.constructor.call(this, cfg);
        this.renderer = Ext.util.Format.numberRenderer(this.format);
    }
});

/**
 * @class Ext.grid.DateColumn
 * @extends Ext.grid.Column
 * <p>A Column definition class which renders a passed date according to the default locale, or a configured
 * {@link #format}. See the {@link Ext.grid.Column#xtype xtype} config option of {@link Ext.grid.Column}
 * for more details.</p>
 */
Ext.grid.DateColumn = Ext.extend(Ext.grid.Column, {
    /**
     * @cfg {String} format
     * A formatting string as used by {@link Date#format} to format a Date for this Column
     * (defaults to <tt>'m/d/Y'</tt>).
     */
    format : 'm/d/Y',
    constructor: function(cfg){
        Ext.grid.DateColumn.superclass.constructor.call(this, cfg);
        this.renderer = Ext.util.Format.dateRenderer(this.format);
    }
});

/**
 * @class Ext.grid.TemplateColumn
 * @extends Ext.grid.Column
 * <p>A Column definition class which renders a value by processing a {@link Ext.data.Record Record}'s
 * {@link Ext.data.Record#data data} using a {@link #tpl configured} {@link Ext.XTemplate XTemplate}.
 * See the {@link Ext.grid.Column#xtype xtype} config option of {@link Ext.grid.Column} for more
 * details.</p>
 */
Ext.grid.TemplateColumn = Ext.extend(Ext.grid.Column, {
    /**
     * @cfg {String/XTemplate} tpl
     * An {@link Ext.XTemplate XTemplate}, or an XTemplate <i>definition string</i> to use to process a
     * {@link Ext.data.Record Record}'s {@link Ext.data.Record#data data} to produce a column's rendered value.
     */
    constructor: function(cfg){
        Ext.grid.TemplateColumn.superclass.constructor.call(this, cfg);
        var tpl = (!Ext.isPrimitive(this.tpl) && this.tpl.compile) ? this.tpl : new Ext.XTemplate(this.tpl);
        this.renderer = function(value, p, r){
            return tpl.apply(r.data);
        };
        this.tpl = tpl;
    }
});

/**
 * @class Ext.grid.ActionColumn
 * @extends Ext.grid.Column
 * <p>A Grid column type which renders an icon, or a series of icons in a grid cell, and offers a scoped click
 * handler for each icon. Example usage:</p>
<pre><code>
new Ext.grid.GridPanel({
    store: myStore,
    columns: [
        {
            xtype: 'actioncolumn',
            width: 50,
            items: [
                {
                    icon   : 'sell.gif',                // Use a URL in the icon config
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert("Sell " + rec.get('company'));
                    }
                },
                {
                    getClass: function(v, meta, rec) {  // Or return a class from a function
                        if (rec.get('change') < 0) {
                            this.items[1].tooltip = 'Do not buy!';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert("Buy " + rec.get('company'));
                    }
                }
            ]
        }
        //any other columns here
    ]
});
</pre></code>
 * <p>The action column can be at any index in the columns array, and a grid can have any number of
 * action columns. </p>
 */
Ext.grid.ActionColumn = Ext.extend(Ext.grid.Column, {
    /**
     * @cfg {String} icon
     * The URL of an image to display as the clickable element in the column. 
     * Optional - defaults to <code>{@link Ext#BLANK_IMAGE_URL Ext.BLANK_IMAGE_URL}</code>.
     */
    /**
     * @cfg {String} iconCls
     * A CSS class to apply to the icon image. To determine the class dynamically, configure the Column with a <code>{@link #getClass}</code> function.
     */
    /**
     * @cfg {Function} handler A function called when the icon is clicked.
     * The handler is passed the following parameters:<div class="mdetail-params"><ul>
     * <li><code>grid</code> : GridPanel<div class="sub-desc">The owning GridPanel.</div></li>
     * <li><code>rowIndex</code> : Number<div class="sub-desc">The row index clicked on.</div></li>
     * <li><code>colIndex</code> : Number<div class="sub-desc">The column index clicked on.</div></li>
     * <li><code>item</code> : Object<div class="sub-desc">The clicked item (or this Column if multiple 
     * {@link #items} were not configured).</div></li>
     * <li><code>e</code> : Event<div class="sub-desc">The click event.</div></li>
     * </ul></div>
     */
    /**
     * @cfg {Object} scope The scope (<tt><b>this</b></tt> reference) in which the <code>{@link #handler}</code>
     * and <code>{@link #getClass}</code> fuctions are executed. Defaults to this Column.
     */
    /**
     * @cfg {String} tooltip A tooltip message to be displayed on hover. {@link Ext.QuickTips#init Ext.QuickTips} must have 
     * been initialized.
     */
    /**
     * @cfg {Boolean} stopSelection Defaults to <code>true</code>. Prevent grid <i>row</i> selection upon mousedown.
     */
    /**
     * @cfg {Function} getClass A function which returns the CSS class to apply to the icon image.
     * The function is passed the following parameters:<div class="mdetail-params"><ul>
     *     <li><b>v</b> : Object<p class="sub-desc">The value of the column's configured field (if any).</p></li>
     *     <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     *         <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     *         <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container element <i>within</i> the table cell
     *         (e.g. 'style="color:red;"').</p></li>
     *     </ul></p></li>
     *     <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data.</p></li>
     *     <li><b>rowIndex</b> : Number<p class="sub-desc">The row index..</p></li>
     *     <li><b>colIndex</b> : Number<p class="sub-desc">The column index.</p></li>
     *     <li><b>store</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul></div>
     */
    /**
     * @cfg {Array} items An Array which may contain multiple icon definitions, each element of which may contain:
     * <div class="mdetail-params"><ul>
     * <li><code>icon</code> : String<div class="sub-desc">The url of an image to display as the clickable element 
     * in the column.</div></li>
     * <li><code>iconCls</code> : String<div class="sub-desc">A CSS class to apply to the icon image.
     * To determine the class dynamically, configure the item with a <code>getClass</code> function.</div></li>
     * <li><code>getClass</code> : Function<div class="sub-desc">A function which returns the CSS class to apply to the icon image.
     * The function is passed the following parameters:<ul>
     *     <li><b>v</b> : Object<p class="sub-desc">The value of the column's configured field (if any).</p></li>
     *     <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     *         <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     *         <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container element <i>within</i> the table cell
     *         (e.g. 'style="color:red;"').</p></li>
     *     </ul></p></li>
     *     <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data.</p></li>
     *     <li><b>rowIndex</b> : Number<p class="sub-desc">The row index..</p></li>
     *     <li><b>colIndex</b> : Number<p class="sub-desc">The column index.</p></li>
     *     <li><b>store</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul></div></li>
     * <li><code>handler</code> : Function<div class="sub-desc">A function called when the icon is clicked.</div></li>
     * <li><code>scope</code> : Scope<div class="sub-desc">The scope (<code><b>this</b></code> reference) in which the 
     * <code>handler</code> and <code>getClass</code> functions are executed. Fallback defaults are this Column's
     * configured scope, then this Column.</div></li>
     * <li><code>tooltip</code> : String<div class="sub-desc">A tooltip message to be displayed on hover. 
     * {@link Ext.QuickTips#init Ext.QuickTips} must have been initialized.</div></li>
     * </ul></div>
     */
    header: '&#160;',

    actionIdRe: /x-action-col-(\d+)/,
    
    /**
     * @cfg {String} altText The alt text to use for the image element. Defaults to <tt>''</tt>.
     */
    altText: '',

    constructor: function(cfg) {
        var me = this,
            items = cfg.items || (me.items = [me]),
            l = items.length,
            i,
            item;

        Ext.grid.ActionColumn.superclass.constructor.call(me, cfg);

//      Renderer closure iterates through items creating an <img> element for each and tagging with an identifying 
//      class name x-action-col-{n}
        me.renderer = function(v, meta) {
//          Allow a configured renderer to create initial value (And set the other values in the "metadata" argument!)
            v = Ext.isFunction(cfg.renderer) ? cfg.renderer.apply(this, arguments)||'' : '';

            meta.css += ' x-action-col-cell';
            for (i = 0; i < l; i++) {
                item = items[i];
                v += '<img alt="' + (item.altText || me.altText) + '" src="' + (item.icon || Ext.BLANK_IMAGE_URL) +
                    '" class="x-action-col-icon x-action-col-' + String(i) + ' ' + (item.iconCls || '') +
                    ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope||this.scope||this, arguments) : '') + '"' +
                    ((item.tooltip) ? ' ext:qtip="' + item.tooltip + '"' : '') + ' />';
            }
            return v;
        };
    },

    destroy: function() {
        delete this.items;
        delete this.renderer;
        return Ext.grid.ActionColumn.superclass.destroy.apply(this, arguments);
    },

    /**
     * @private
     * Process and refire events routed from the PayLoad's processEvent method.
     * Also fires any configured click handlers. By default, cancels the mousedown event to prevent selection.
     * Returns the event handler's status to allow cancelling of PayLoad's bubbling process.
     */
    processEvent : function(name, e, grid, rowIndex, colIndex){
        var m = e.getTarget().className.match(this.actionIdRe),
            item, fn;
        if (m && (item = this.items[parseInt(m[1], 10)])) {
            if (name == 'click') {
                (fn = item.handler || this.handler) && fn.call(item.scope||this.scope||this, grid, rowIndex, colIndex, item, e);
            } else if ((name == 'mousedown') && (item.stopSelection !== false)) {
                return false;
            }
        }
        return Ext.grid.ActionColumn.superclass.processEvent.apply(this, arguments);
    }
});

/*
 * @property types
 * @type Object
 * @member Ext.grid.Column
 * @static
 * <p>An object containing predefined Column classes keyed by a mnemonic code which may be referenced
 * by the {@link Ext.grid.ColumnModel#xtype xtype} config option of ColumnModel.</p>
 * <p>This contains the following properties</p><div class="mdesc-details"><ul>
 * <li>gridcolumn : <b>{@link Ext.grid.Column Column constructor}</b></li>
 * <li>booleancolumn : <b>{@link Ext.grid.BooleanColumn BooleanColumn constructor}</b></li>
 * <li>numbercolumn : <b>{@link Ext.grid.NumberColumn NumberColumn constructor}</b></li>
 * <li>datecolumn : <b>{@link Ext.grid.DateColumn DateColumn constructor}</b></li>
 * <li>templatecolumn : <b>{@link Ext.grid.TemplateColumn TemplateColumn constructor}</b></li>
 * </ul></div>
 */
Ext.grid.Column.types = {
    gridcolumn : Ext.grid.Column,
    booleancolumn: Ext.grid.BooleanColumn,
    numbercolumn: Ext.grid.NumberColumn,
    datecolumn: Ext.grid.DateColumn,
    templatecolumn: Ext.grid.TemplateColumn,
    actioncolumn: Ext.grid.ActionColumn
};