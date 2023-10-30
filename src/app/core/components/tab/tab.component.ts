import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeType, ITab } from '../../model';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
    @Input() changeType: ChangeType = 'click';
    @Input() tabTitles!: ITab[];
    @Output() activeTabValueChange: EventEmitter<string | null> = new EventEmitter();
    ngOnInit(): void {
        this._init();
    }
    public get activeTab(): ITab | undefined {
        return this.tabTitles.find((tab) => tab.isActive);
    }
    public setActiveTab(activeTab: ITab) {
        this.tabTitles.forEach((tab) => {
            tab.isActive = tab === activeTab ? true : false;
        });
        this.activeTabValueChange.emit(activeTab.value);
    }
    public hideTabs() {
        this.tabTitles.forEach((tab) => (tab.isActive = false));
        this.activeTabValueChange.emit(null);
    }
    private _init() {
        const activeTab = this.tabTitles.find((tab) => tab.isActive);
        if (activeTab) this.setActiveTab(activeTab);
    }
}
