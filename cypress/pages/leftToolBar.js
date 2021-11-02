import { BasePage } from './basePage';


export class LeftToolBar extends BasePage {

    get leftToolMenu() {
        return this.getByCustomCss('.ant-layout-sider-children');
    }

    get PositionSectionButton() {
        return this.leftToolMenu.find('[name="positions"]');
    }

    get PoolSectionButton() {
        return this.leftToolMenu.find('[name="pool"]');
    }
}
