// vite.config.ts
import path from "node:path";
import { defineConfig, loadEnv } from "file:///Users/zhangzeming/Documents/Blog/encryption/node_modules/.pnpm/vite@4.5.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zhangzeming/Documents/Blog/encryption/node_modules/.pnpm/@vitejs+plugin-vue@4.5.0_vite@4.5.0_vue@3.3.9/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///Users/zhangzeming/Documents/Blog/encryption/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.5.0/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import setupExtend from "file:///Users/zhangzeming/Documents/Blog/encryption/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@4.5.0/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///Users/zhangzeming/Documents/Blog/encryption/node_modules/.pnpm/unplugin-auto-import@0.16.7/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_dirname = "/Users/zhangzeming/Documents/Blog/encryption";
var vite_config_default = defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd());
  return {
    base: "./",
    plugins: [
      vue(),
      setupExtend(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        // eslint-disable-next-line node/prefer-global/process
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      }),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: false,
          // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
          filepath: "./.eslintrc-auto-import.json",
          // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true
          // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: "./auto-imports.d.ts"
      })
    ],
    resolve: {
      alias: {
        // 设置路径
        "~": path.resolve(__vite_injected_original_dirname, "./"),
        // 设置别名
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    server: {
      port: 3e3,
      host: true,
      open: true
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemhhbmd6ZW1pbmcvRG9jdW1lbnRzL0Jsb2cvZW5jcnlwdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3poYW5nemVtaW5nL0RvY3VtZW50cy9CbG9nL2VuY3J5cHRpb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3poYW5nemVtaW5nL0RvY3VtZW50cy9CbG9nL2VuY3J5cHRpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuaW1wb3J0IHNldHVwRXh0ZW5kIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvcHJlZmVyLWdsb2JhbC9wcm9jZXNzXHJcbiAgbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKVxyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiAnLi8nLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgc2V0dXBFeHRlbmQoKSxcclxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL3ByZWZlci1nbG9iYWwvcHJvY2Vzc1xyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zL3N2ZycpXSxcclxuICAgICAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxyXG4gICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgICB9KSxcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgaW5jbHVkZTogWy9cXC5bdGpdc3g/JC8sIC9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcclxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXHJcbiAgICAgICAgZXNsaW50cmM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBcdTlFRDhcdThCQTRmYWxzZSwgdHJ1ZVx1NTQyRlx1NzUyOFx1MzAwMlx1NzUxRlx1NjIxMFx1NEUwMFx1NkIyMVx1NUMzMVx1NTNFRlx1NEVFNVx1RkYwQ1x1OTA3Rlx1NTE0RFx1NkJDRlx1NkIyMVx1NURFNVx1N0EwQlx1NTQyRlx1NTJBOFx1OTBGRFx1NzUxRlx1NjIxMFxyXG4gICAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgLy8gRGVmYXVsdCBgLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbmBcclxuICAgICAgICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWUsIC8vIERlZmF1bHQgYHRydWVgLCAodHJ1ZSB8IGZhbHNlIHwgJ3JlYWRvbmx5JyB8ICdyZWFkYWJsZScgfCAnd3JpdGFibGUnIHwgJ3dyaXRlYWJsZScpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdHM6ICcuL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1OERFRlx1NUY4NFxyXG4gICAgICAgICd+JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXHJcbiAgICAgICAgLy8gXHU4QkJFXHU3RjZFXHU1MjJCXHU1NDBEXHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULE9BQU8sVUFBVTtBQUN2VSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFMdkIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFeEMsVUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQzNCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLFlBQVk7QUFBQSxNQUNaLHFCQUFxQjtBQUFBO0FBQUE7QUFBQSxRQUduQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBQUE7QUFBQSxRQUU5RCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxTQUFTLENBQUMsY0FBYyxVQUFVLGNBQWMsT0FBTztBQUFBLFFBQ3ZELFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxRQUM3QixVQUFVO0FBQUEsVUFDUixTQUFTO0FBQUE7QUFBQSxVQUNULFVBQVU7QUFBQTtBQUFBLFVBQ1Ysa0JBQWtCO0FBQUE7QUFBQSxRQUNwQjtBQUFBLFFBQ0EsS0FBSztBQUFBLE1BQ1AsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQTtBQUFBLFFBRUwsS0FBSyxLQUFLLFFBQVEsa0NBQVcsSUFBSTtBQUFBO0FBQUEsUUFFakMsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
