# Reels / Stories Editor — TZ и план

## Цель
Система принимает несколько видео-файлов -> склеивает -> форматирует под Instagram -> отдаёт готовый MP4.

---

## Два режима

### Режим: Reels
- Формат: 9:16, 1080x1920 px
- Длительность: до 90 секунд
- Аудио: оригинал или замена на трек
- Переходы: crossfade между клипами
- Output: MP4, H.264, AAC

### Режим: Stories
- Формат: 9:16, 1080x1920 px
- Нарезка: автоматически режет на части по 15 сек
- Output: MP4, H.264, AAC (несколько файлов: story_1.mp4, story_2.mp4...)

---

## Фичи (MVP)

| # | Фича | Описание |
|---|------|----------|
| 1 | Merge | Склеить N видео-файлов в один |
| 2 | Crop/Pad 9:16 | Обрезать или добавить черные полосы до 1080x1920 |
| 3 | Transitions | Crossfade между клипами (0.3-1 сек, настраиваемо) |
| 4 | Audio overlay | Наложить музыкальный трек поверх видео (fade in/out) |
| 5 | Volume mix | Регулировать громкость оригинала vs музыки |
| 6 | Stories mode | Нарезать результат на 15-сек куски |
| 7 | Speed | Замедление / ускорение отдельных клипов (0.5x-2x) |
| 8 | Trim | Обрезать начало/конец каждого клипа (start_at, end_at) |

---

## CLI интерфейс (Python)

```bash
# Reels - склеить 3 видео с музыкой
python reels_editor.py \
  --mode reels \
  --clips clip1.mp4 clip2.mp4 clip3.mp4 \
  --music track.mp3 \
  --music-volume 0.4 \
  --transition crossfade \
  --transition-duration 0.5 \
  --output output_reel.mp4

# Stories - нарезать результат на 15-сек части
python reels_editor.py \
  --mode stories \
  --clips clip1.mp4 clip2.mp4 \
  --music track.mp3 \
  --output output_story

# Trim клипов
python reels_editor.py \
  --mode reels \
  --clips clip1.mp4 clip2.mp4 \
  --trim "0:00-0:30" "0:10-0:45" \
  --output output.mp4

# Speed
python reels_editor.py \
  --mode reels \
  --clips clip1.mp4 clip2.mp4 \
  --speed 1.5 \
  --output output.mp4
```

---

## Стек

| Компонент | Технология |
|-----------|-----------|
| Ядро обработки | FFmpeg (бесплатно, локально) |
| Скрипт | Python 3 + subprocess |
| Зависимости | ffmpeg (brew install ffmpeg) |

Никаких платных API — всё локально через ffmpeg.

---

## Структура файлов

```
T-1/reels-agent/
├── REELS-EDITOR-PLAN.md    <- этот файл
├── reels_editor.py          <- главный скрипт (CLI)
├── lib/
│   ├── merger.py            <- склейка клипов
│   ├── formatter.py         <- crop/pad до 9:16
│   ├── transitions.py       <- переходы
│   ├── audio.py             <- overlay музыки
│   └── stories.py           <- нарезка на 15 сек
├── presets/
│   ├── reels.json           <- дефолтные настройки Reels
│   └── stories.json         <- дефолтные настройки Stories
└── examples/                <- тестовые видео для проверки
```

---

## Instagram specs (важно для output)

| Параметр | Reels | Stories |
|----------|-------|---------|
| Разрешение | 1080x1920 | 1080x1920 |
| Aspect ratio | 9:16 | 9:16 |
| Макс. длина | 90 сек | 15 сек |
| Видео codec | H.264 | H.264 |
| Аудио codec | AAC, 128kbps | AAC, 128kbps |
| Макс. размер | 4 GB | 250 MB |
| FPS | 30 fps | 30 fps |

---

## Логика обработки (pipeline)

```
INPUT: [clip1.mp4, clip2.mp4, clip3.mp4] + [music.mp3]
          |
          v
     1. Trim каждый клип (если задано)
          |
          v
     2. Speed adjustment (если задано)
          |
          v
     3. Resize/crop/pad -> 1080x1920 (9:16)
          |
          v
     4. Normalize FPS -> 30fps
          |
          v
     5. Concatenate с transitions (crossfade)
          |
          v
     6. Audio overlay (музыка + оригинал, volume mix)
          |
          v
     7. Encode: H.264 + AAC, bitrate оптимален для Instagram
          |
          v
OUTPUT:
  Reels  -> output_reel.mp4
  Stories -> output_story_01.mp4, output_story_02.mp4, ...
```

---

## Phase 2 (после MVP)
- Telegram-бот: отправить видео боту -> он обрабатывает -> отдаёт готовый файл
- Текстовые субтитры (auto-captions через Whisper)
- Авто-выбор лучших моментов из длинного видео (AI highlight)
- Web UI (drag & drop клипы, preview результата)

---

## Статус: PLAN (не реализован)
Готов к реализации по команде Командира.
