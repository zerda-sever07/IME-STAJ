<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TaskOrbitCLI extends Command
{
    protected $signature = 'task:orbit {mesaj?}';

    public function handle()
    {
        $mesaj = $this->argument('mesaj');
        $url = "ws://127.0.0.1:8001/app/7lh9gqchj7pjr4fvma5j";

    $options = [
    'timeout' => 60,
    'context' => stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]])
];

        if ($mesaj) {
            try {
                $client = new \WebSocket\Client($url, $options);
                $client->text($mesaj);
                $this->info("✔ Gonderildi: " . $mesaj);
                $client->close();
            } catch (\Exception $e) {
                $this->error("❌ Mesaj gonderilemedi! Sunucu kapali.");
            }
        } else {
            $this->warn("📡 Task Orbit Dinleniyor (8001)...");
            try {
                $client = new \WebSocket\Client($url, $options);
                while (true) {
                    $gelen = $client->receive();
                    if ($gelen) {
                        $this->line("<info>[YENİ BİLDİRİM]</info> " . $gelen);
                    }
                }
            } catch (\Exception $e) {
                $this->error("❌ Baglanti hatasi: " . $e->getMessage());
            }
        }
    }
}
