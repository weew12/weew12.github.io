const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

process.env.PATH += `;${process.env.APPDATA}\\npm`;
process.env.NODE_OPTIONS = '--max_old_space_size=4096';

/**
 * 格式化 TARGET_DIR下的md文件
 */
const TARGET_DIR = './docs';

async function processMarkdown(filePath) {
  try {
    const normalizedPath = filePath.replace(/\\/g, '/');
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      throw new Error('文件不存在');
    }

    // 1. Prettier格式化
    console.log(`🔄 Prettier处理: ${normalizedPath}`);
    execSync(`npx prettier --write "${normalizedPath}" --tab-width 2`, {
      stdio: 'inherit',
      shell: true,
      encoding: 'utf8'
    });

  } catch (err) {
    console.error(`❌ 文档存在格式问题`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { encoding: 'utf8' }).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.md')) {
      processMarkdown(filePath);
    }
  });
}

walkDir(TARGET_DIR);