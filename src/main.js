import { createApp } from "vue/dist/vue.esm-bundler";
import { config as Config } from "./components/config";
import { NCard, NGrid, NGi, NLayout, NLayoutHeader, NLayoutFooter, NLayoutContent } from "naive-ui";


export default class GitEstudos {
  constructor() {
    this.render();
  }

  render() {
    const App = {
      components: { Config, NCard, NGrid, NGi, NLayout, NLayoutHeader, NLayoutFooter, NLayoutContent  },
      setup() {
        const persons = [
          {
            name: "Marcel Marques Matias",
            position: "#Programador",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Feugiat scelerisque varius morbi enim nunc faucibus a.",
            user: "@marcmatias"
          },
          {
            name: "Pessoa 2",
            position: "#Lorem",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Feugiat scelerisque varius morbi enim nunc faucibus a.",
            user: "@pessoa2"
          },
          {
            name: "Pessoa 3",
            position: "#Lorem",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Feugiat scelerisque varius morbi enim nunc faucibus a.",
            user: "@pessoa3"
          },
          {
            name: "Pessoa 4",
            position: "#Lorem",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Feugiat scelerisque varius morbi enim nunc faucibus a.",
            user: "@pessoa4"
          },
        ];
        return { persons };
      },
      template: `
        <Config>
          <n-layout style="height: 100vh; position: relative">
            <n-layout position="absolute">
              <n-layout-header style="height: 64px; padding: 24px; font-weight: 300; display:flex; align-items: center" bordered>
                Pythonic Café
              </n-layout-header>
              <n-layout embedded position="absolute" style="top: 64px; bottom: 64px">
                <n-layout embedded content-style="padding: 24px;">
                  <n-grid x-gap="12" y-gap="12" cols="1 m:2 l:3" responsive="screen">
                    <n-gi v-for="(person, index) in persons" :key="index">
                      <n-card :title="person.name" hoverable>
                        <template #header-extra>
                          {{ person.position }}
                        </template>
                        {{ person.bio }}
                        <template #footer>
                          {{ person.user }}
                        </template>
                      </n-card>
                    </n-gi>
                  </n-grid>
                </n-layout>
              </n-layout>
              <n-layout-footer
                bordered
                position="absolute"
                style="height: 64px; padding: 24px; font-weight: 300; display:flex; justify-content: center; align-items: center"
              >
                Pythonic Café
              </n-layout-footer>
            </n-layout>
          </n-layout>
        </Config>
      `,
    };

    const app = createApp(App);
    app.mount("#app");
  }
}
